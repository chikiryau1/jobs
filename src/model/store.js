import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { jobList, job, form } from './reducers'
import {RESET_STATE} from './actions';
const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger];


const reducer = combineReducers({
  jobList,
  job,
  form
});

const init = {
  jobList: {
    fetching: false,
    error: null
  },
  job: {
    fetching: false,
    error: null
  },
  form: {
    errors: {

    }
  }
};

const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = init
  }

  return reducer(state, action)
};

const store = createStore(rootReducer, init, applyMiddleware(...middleware));

export const dispatch = store.dispatch;

export default store