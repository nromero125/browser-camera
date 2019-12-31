import {
  TAKE_PHOTO,
  CANCEL_PHOTO,
  SEND_PHOTO,
  SEND_PHOTO_FAIL,
  SEND_PHOTO_SUCCESS
} from "../types/camera";

const initialState = {
  facingMode: "environment",
  success: false,
  taked: false,
  isFetching: false,
  photo: "",
  errorMessage: "",
  successMessage: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TAKE_PHOTO:
      return {
        ...state,
        taked: true,
        photo: action.payload
      };
    case CANCEL_PHOTO:
      return {
        ...state,
        taked: false,
        photo: ""
      };
    case SEND_PHOTO:
      return {
        ...state,
        isFetching: true
      };
    case SEND_PHOTO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        successMessage: action.payload.message
      };

    case SEND_PHOTO_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
}
