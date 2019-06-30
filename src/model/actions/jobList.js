import { dispatch } from '../store'
import {getJobsList as get} from '../../dataRepository'

export const GET_JOBLIST_START = 'GET_JOBLIST_START';
export const GET_JOBLIST_OK = 'GET_JOBLIST_OK';
export const GET_JOBLIST_ERR = 'GET_JOBLIST_ERR';


export function getJobsList (...args) {
  dispatch({
    type: GET_JOBLIST_START
  });
  return get(...args)
    .then(data => {
      return dispatch({
        type: GET_JOBLIST_OK,
        data
      })
    })
    .catch(e => {
      return dispatch({
        type: GET_JOBLIST_ERR,
        data: e
      })
    })
}