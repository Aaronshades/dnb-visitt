/*
 * Created by Thomas Hartmann
 * A mapper for boligannonser
 */

import { connect } from 'react-redux'
import Annonse from './BoligAnnonse'
import { selectProperty } from '../../../redux/reducers/booking/bookingActions'

const mapStateToProps = state => {
  const property = state.currentProperty.propertyData
  if (!property) return

  return ({
    price: property.price || 50,
    commonCosts: property.commonCosts,
    sharedDebt: property.sharedDebt,
    grossArea: property.grossArea,
    netLivingSpace: property.netLivingSpace,
    entryFloor: property.entryFloor,
    floors: property.floors || 1,
    numberOfRooms: property.numberOfRooms,
    bedrooms: property.bedrooms,
    energyRating: property.energyRating,
    streetNumber: property.streetNumber,
    projectConstructionStart: property.projectConstructionStart || '2020-06-05',
    projectConstructionFinalized: property.projectConstructionFinalized || '2020-06-05',
    streetName: property.streetName,
    apartmentNumber: property.apartmentNumber,
    zipLocation: property.zipLocation,
    county: property.county,
    property: property
  })
}

const mapDispatchToProps = (dispatch) => ({
  handleSelectProperty (property) {
    dispatch(selectProperty(property))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Annonse)
