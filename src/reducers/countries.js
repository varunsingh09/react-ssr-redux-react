import {
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES,
  REQUEST_EU_COUNTRIES,
  RECEIVE_EU_COUNTRIES
} from "../action/types";

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  lastUpdate: Date.now()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_COUNTRIES: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_COUNTRIES: {
      return { ...state, isFetching: false, data: action.payload };
    }
    case REQUEST_EU_COUNTRIES: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_EU_COUNTRIES: {
      return { ...state, isFetching: false, data: action.payload };
    }
    default:
      return state;
  }
};