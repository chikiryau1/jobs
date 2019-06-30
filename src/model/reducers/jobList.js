import {
  GET_JOBLIST_ERR,
  GET_JOBLIST_OK,
  GET_JOBLIST_START,
} from '../actions/jobList'

export default function (state={}, action) {
  switch (action.type) {
    case GET_JOBLIST_START:
      return {
        fetching: true,
        error: null,
      };
    case GET_JOBLIST_OK:
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
    case GET_JOBLIST_ERR:
      return {
        fetching: false,
        error: action.data
      };
    default:
      return state
  }
}