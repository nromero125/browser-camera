import {SWITCH_CAMERA, GET_DEVICES, SWITCH_FACING_MODE} from "../types/camera";

const initialState = {
    devices: [],
    selectedDevice : null,
    facingMode: 'environment'
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
        case SWITCH_FACING_MODE:
            return {
                ...state,
                facingMode: action.payload === 'user' ? 'environment' : 'user'
            }
        default:
            return state;
    }
}