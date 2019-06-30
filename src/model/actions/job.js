import { dispatch } from '../store'
import {getJob as get} from '../../dataRepository'

export const GET_JOB_START = 'GET_JOB_START';
export const GET_JOB_OK = 'GET_JOB_OK';
export const GET_JOB_ERR = 'GET_JOB_ERR';

export function getJob (...args) {
  dispatch({
    type: GET_JOB_START
  });
  return get(...args)
    .then(data => {
      return dispatch({
        type: GET_JOB_OK,
        data
      })
    })
    .catch(e => {
      return dispatch({
        type: GET_JOB_ERR,
        data: e
      })
    })
}