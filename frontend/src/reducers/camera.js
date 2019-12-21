import {SWITCH_CAMERA, GET_DEVICES} from "../types/camera";

const initialState = {
    devices: [],
    selectedDevice : null  
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
        default:
            return state;
    }
}