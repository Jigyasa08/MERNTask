import {
  DATA_GET_REQUEST,
  DATA_GET_SUCCESS,
  DATA_GET_FAILURE,
  DATA_POST_REQUEST,
  DATA_POST_SUCCESS,
  DATA_POST_FAILURE,
  DATA_EDIT_REQUEST,
  DATA_EDIT_SUCCESS,
  DATA_EDIT_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const dataGetRequest = () => {
  return {
    type: DATA_GET_REQUEST,
  };
};

export const dataGetSuccess = (payload) => {
  return {
    type: DATA_GET_SUCCESS,
    payload: payload,
  };
};

export const dataGetFailure = (payload) => {
  return {
    type: DATA_GET_FAILURE,
    payload: payload,
  };
};

//Function to call Get API from Backend
export const getData = () => (dispatch) => {
  dispatch(dataGetRequest());
  const config = {
    method: "GET",
    url: `http://localhost:5000/api/data`,
  };

  axios(config)
    .then((res) => {
      dispatch(dataGetSuccess(res.data));
    })
    .catch((err) => dispatch(dataGetFailure(err)));
};

export const dataPostRequest = () => {
  return {
    type: DATA_POST_REQUEST,
  };
};

export const dataPostSuccess = (payload) => {
  return {
    type: DATA_POST_SUCCESS,
    payload: payload,
  };
};

export const dataPostFailure = (payload) => {
  return {
    type: DATA_POST_FAILURE,
    payload: payload,
  };
};

//Function to call Post API from Backend
export const postData = (payload) => (dispatch) => {
  dispatch(dataPostRequest());
  const config = {
    method: "POST",
    url: `http://localhost:5000/api/data`,
    data: payload,
  };

  axios(config)
    .then((res) => {
      dispatch(dataPostSuccess(res.data));
    })
    .catch((err) => dispatch(dataPostFailure(err)));
};

export const dataEditRequest = () => {
  return {
    type: DATA_EDIT_REQUEST,
  };
};

export const dataEditSuccess = (payload) => {
  return {
    type: DATA_EDIT_SUCCESS,
    payload: payload,
  };
};

export const dataEditFailure = (payload) => {
  return {
    type: DATA_EDIT_FAILURE,
    payload: payload,
  };
};

//Function to call Edit API from Backend
export const editData = (payload) => (dispatch) => {
  dispatch(dataEditRequest());
  const { _id } = payload;

  const config = {
    method: "POST",
    url: `http://localhost:5000/api/data/${_id}`,
    data: payload,
  };

  axios(config)
    .then((res) => {
      dispatch(dataEditSuccess(res.data));
    })
    .catch((err) => dispatch(dataEditFailure(err)));
};
