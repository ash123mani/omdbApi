import { GET_ITEM_START, GET_ITEM_SUCCESS, GET_ITEM_FAILED } from "../actions/type";

const initialState = {
  loading: false,
  data: {}
};

export const getItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM_START:
      return {
        ...state,
        loading: true
      };
    case GET_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_ITEM_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
