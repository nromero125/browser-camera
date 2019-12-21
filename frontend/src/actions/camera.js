import {GET_DEVICES, SWITCH_CAMERA, SWITCH_FACING_MODE} from '../types/camera';


export const getDevices = () => dispatch => {
    navigator.mediaDevices.enumerateDevices()
    .then(mediaDevices => {
        dispatch({
            type: GET_DEVICES,
            payload: mediaDevices.filter(({ kind }) => kind === "videoinput")
        })
        
    });
}

export const setSelectedDevice = (device) => dispatch => {
    dispatch({
        type: SWITCH_CAMERA,
        payload: device
    });
}

export const switchFacingMode = (facingMode) => dispatch => {
    dispatch({
        type: SWITCH_FACING_MODE,
        payload: facingMode
    });
}