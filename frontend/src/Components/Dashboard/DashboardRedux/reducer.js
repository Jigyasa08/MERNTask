import { loadData } from "../../../Redux/localStorage";
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

//Redux State
const initState = {
  isLoading: false,
  error: false,
  data: [],
  postCount: loadData("postCount") || 0,
  editCount: loadData("editCount") || 0,
};

export const dataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DATA_GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }

    case DATA_GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        data: payload,
      };
    }

    case DATA_GET_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }

    case DATA_EDIT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }

    case DATA_EDIT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        editCount: payload.editCount,
      };
    }

    case DATA_EDIT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }

    case DATA_POST_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }

    case DATA_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        postCount: payload.postCount,
      };
    }

    case DATA_POST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }

    default:
      return state;
  }
};
