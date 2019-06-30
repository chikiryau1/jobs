import {getJobsList} from './jobList';
import {getJob} from './job';
import {onChange} from './form';
import {dispatch} from '../store';

const RESET_STATE = 'RESET_STATE';

function reset() {
  dispatch({
    type: RESET_STATE
  });
}

export {getJobsList, getJob, onChange, reset, RESET_STATE}