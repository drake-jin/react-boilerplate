import { combineReducers } from 'redux'
import { penderReducer as pender } from 'redux-pender'

import post from './post'

export default combineReducers({
  post,
  pender,
})
