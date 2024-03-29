import {LOGIN, GET_PERDODIC_DATA} from '../types';

export const LoginUser = jwt_token => {
  return dispatch => {
    dispatch({
      type: LOGIN,
      payload: jwt_token,
    });
  };
};

export const setPeriodicData = data => {
  return dispatch => {
    dispatch({
      type: GET_PERDODIC_DATA,
      payload: data,
    });
  };
};
