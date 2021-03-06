/* global alert */

/*
 * Created by Thomas Hartmann
 * A file containing database queries
 */
import { database } from './firebase'
import { addBooking } from '../redux/reducers/bookingSchedule/bookingScheduleActions'
import { saveBooking } from '../redux/reducers/booking/bookingActions'
import { composeMail } from '../mailHandler/mailHandler'
import { formatTime } from '../helperFunctions/formatting'

const createMailSubject = (date, time, branch) => `Din bestilling av Visitt: ${branch}, ${date}, kl ${time}`

const mailHTML = (date, time, branch, property) => {
  const addressString = `${property.streetName} ${property.streetNumber}`
  const fullAddressString = property.apartmentNumber
    ? addressString.concat(`, leilighet ${property.apartmentNumber}`)
    : addressString
  return (
    `<div>Info om din bestilling av Visitt: ${branch}, ${date}, ${time}.
    Bolig: ${fullAddressString}</div>`
  )
}

export const addBookingToDatabase = (branch, date, time, details) =>
  (dispatch, getState) => {
    const ref = database.ref(`appointments/${branch}/${date}/${time}`)
    const property = getState().currentProperty.propertyData

    ref.once('value')
      .then(snapshot => {
        if (snapshot.val() !== null) {
          throw new Error('Den valgte tiden er ikke ledig')
        }
        ref.set(details)
      })
      .then(() => {
        dispatch(saveBooking({
          date: date,
          time: time,
          branch: branch,
          client: {
            email: details.email,
            name: details.name,
            phoneNumber: details.phoneNumber
          },
          property: property
        }))
      })
      .then(() => {
        const timeFormatted = formatTime(time)

        composeMail({
          to: details.email,
          subject: createMailSubject(date, timeFormatted, branch),
          html: mailHTML(date, timeFormatted, branch, property)
        })
      })
      .catch(err => alert(err.message))
  }

export const getSchedule = (branch, date) => dispatch => {
  const ref = database.ref(`appointments/${branch}/${date}`)

  ref.on('child_added', snapshot => {
    if (snapshot.val() !== null) {
      dispatch(addBooking(snapshot.key))
    }
  })
}

export const addSupportInquiry = (name, email, phoneNumber, message) => {
  const ref = database.ref('inquiries')

  ref.push().set({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    message: message
  })
  .catch(err => alert(err.message))
}
