import { dispatch } from '../store'

export const INPUT = 'INPUT';

export function onChange (data) {
  dispatch({
    type: INPUT,
    data
  });
}