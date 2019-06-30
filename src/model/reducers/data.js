import {
  GET_DATA_ERR,
  GET_DATA_OK,
  GET_DATA_START,
} from '../actions/data'

export default function (state={}, action) {
  switch (action.type) {
    case GET_DATA_START:
      return {
        fetching: true,
        error: null,
      };
    case GET_DATA_OK:
      if(action.data.Error){
        return {
          fetching: false,
          error: action.data
        };
      }
      return {
        fetching: false,
        error: null,
        items: action.data
      };
    case GET_DATA_ERR:
      return {
        fetching: false,
        error: action.data
      };
    default:
      return state
  }
}