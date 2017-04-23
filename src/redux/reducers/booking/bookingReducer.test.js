/* global it, expect */

/*
 * Created by Thomas Hartmann
 * Test file for booking reducer
 */

import {
  database
} from '../../../firebase/firebase'
import reducer from './bookingReducer'
import types from './bookingActionTypes'

const initialState = {
  'date': '',
  'time': '',
  'client': {
    'name': '',
    'email': ''
  },
  'property': {
  }
}

it('should set the email address', () => {
  const payload = 'me@example.com'

  const expectedState = {
    'date': '',
    'time': '',
    'client': {
      'name': '',
      'email': payload
    },
    'property': {
    }
  }

  expect(
    reducer(initialState, ({ type: types.SET_CLIENT_EMAIL, payload: payload })))
    .toEqual(expectedState)
})

it('should change the client name', () => {
  const payload = 'Jan Johansen'

  const expectedState = {
    'date': '',
    'time': '',
    'client': {
      'name': payload,
      'email': ''
    },
    'property': {
    }
  }

  expect(reducer
    (initialState, ({ type: types.SET_CLIENT_NAME, payload: payload })))
    .toEqual(expectedState)
})

it('should set the time', () => {
  const payload = '0900'

  const expectedState = {
    'date': '',
    'time': payload,
    'client': {
      'name': '',
      'email': ''
    },
    'property': {
    }
  }

  expect(
    reducer(initialState, ({ type: types.SET_BOOKING_TIME, payload: payload })))
    .toEqual(expectedState)
})

it('should set the date', () => {
  const payload = '2017/04/22'

  const expectedState = {
    'date': payload,
    'time': '',
    'client': {
      'name': '',
      'email': ''
    },
    'property': {
    }
  }
  expect(
    reducer(initialState, ({ type: types.SET_BOOKING_DATE, payload: payload })))
    .toEqual(expectedState)
})

it('should change the property', () => {
  const payload = {
    id: 1,
    address: 'Some street 22b'
  }

  const expectedState = {
    'date': '',
    'time': '',
    'client': {
      'name': '',
      'email': ''
    },
    'property': payload
  }
  expect(
    reducer(initialState, ({ type: types.SELECT_PROPERTY, payload: payload })))
    .toEqual(expectedState)
})
