import {
    SEND_PHOTO,
    SEND_PHOTO_SUCCESS,
    SEND_PHOTO_FAIL,
    TAKE_PHOTO,
    CANCEL_PHOTO
} from "../types/camera";
import DocService from "../services/camera";

export const sendPhoto = photo => dispatch => {
    dispatch({ type: SEND_PHOTO });
    const data = {
        doc: photo
    };
    DocService.sendPhoto(data)
        .then(res => {
            dispatch({
                type: SEND_PHOTO_SUCCESS,
                payload: res.data.success
            });
        })
        .catch(error => {
            dispatch({
                type: SEND_PHOTO_FAIL,
                payload: error
            });
        });
};

export const takePhoto = photo => dispatch => {
    dispatch({
        type: TAKE_PHOTO,
        payload: photo
    });
};

export const cancelPhoto = () => dispatch => {
    dispatch({
        type: CANCEL_PHOTO
    });
};
