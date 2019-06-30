import {
  GET_JOB_ERR,
  GET_JOB_OK,
  GET_JOB_START,
} from '../actions/job'

export default function (state={}, action) {
  switch (action.type) {
    case GET_JOB_START:
      return {
        fetching: true,
        error: null,
      };
    case GET_JOB_OK:
      if(action.data.Error){
        return {
          fetching: false,
          error: action.data
        };
      }
      return {
        fetching: false,
        error: null,
        job: action.data
      };
    case GET_JOB_ERR:
      return {
        fetching: false,
        error: action.data
      };
    default:
      return state
  }
}