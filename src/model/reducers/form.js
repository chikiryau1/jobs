import {
  INPUT
} from '../actions/form'

export default function (state={}, action) {
  if (action.type === INPUT){
    return {
      ...state,
      ...action.data
    }
  }

  return state
}