import axios from "axios";
import { GET_ITEM_START, GET_ITEM_SUCCESS, GET_ITEM_FAILED } from "./type";
import { baseUrl } from "./contants";

export const getItemStart = () => {
  return {
    type: GET_ITEM_START
  };
};

export const getItemSuccess = data => {
  return {
    type: GET_ITEM_SUCCESS,
    payload: data
  };
};

export const getItemFailed = error => {
  return {
    type: GET_ITEM_FAILED,
    payload: error
  };
};

export const getItems = queryString => {
  return dispatch => {
    dispatch(getItemStart());
    return axios
      .get(`${baseUrl}&s=${queryString}`)
      .then(response => {
        console.log("response is", response);
        console.log("response type", typeof response);
        if (response.data.Response) {
          dispatch(getItemSuccess(response.data));
        } else {
          Promise.reject(response.data.Error);
        }
      })
      .catch(error => {
        dispatch(getItemFailed(error));
      });
  };
};
