import {SWITCH_CAMERA, TAKE_PHOTO, CANCEL_PHOTO, GET_DEVICES, SWITCH_FACING_MODE, SEND_PHOTO, SEND_PHOTO_FAIL, SEND_PHOTO_SUCCESS} from "../types/camera";

const initialState = {
    devices: [],
    selectedDevice : null,
    facingMode: 'environment',
    success: false,
    taked: false,
    isFetching: false,
    photo: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SWITCH_CAMERA:
            return {
                ...state,
                selectedDevice: action.payload
            };
        case GET_DEVICES:
            return {
                ...state,
                devices: action.payload
            };
        
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
                photo: ''
            };
        case SWITCH_FACING_MODE:
            return {
                ...state,
                facingMode: action.payload === 'user' ? 'environment' : 'user'
            }
        case SEND_PHOTO:
            return {
                ...state,
                isFetching: true
            }
        case SEND_PHOTO_SUCCESS:
            return {
                ...state,
                isFetching: false,
                success: true
            }

        case SEND_PHOTO_FAIL:
                return {
                    ...state,
                    isFetching: false,
                    errorMessage: action.payload.error
                }
        default:
            return state;
    }
}