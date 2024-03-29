import {LOGIN, GET_PERDODIC_DATA} from '../types';
const initialState = {
  jwt_token: null,
  api_data: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        jwt_token: action.payload,
      };
    case GET_PERDODIC_DATA:
      return {
        ...state,
        api_data: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
