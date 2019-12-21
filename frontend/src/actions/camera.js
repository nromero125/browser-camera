import {GET_DEVICES, SWITCH_CAMERA} from '../types/camera';


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
    console.log(device);
    dispatch({
        type: SWITCH_CAMERA,
        payload: device
    });
}