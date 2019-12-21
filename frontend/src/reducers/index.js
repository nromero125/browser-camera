import { combineReducers } from 'redux';
import cameraReducer from '../reducers/camera';

export default combineReducers({
    camera: cameraReducer
});