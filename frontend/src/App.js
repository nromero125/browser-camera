import React,{useEffect} from 'react';
import Webcam from "react-webcam";
import CameraDropdown from './Components/CameraDropdown';
import { useDispatch, useSelector } from "react-redux";
import {getDevices, switchFacingMode} from './actions/camera';
import './App.css';
 

const useFetching = (action, dispatch) => {
  useEffect( () => {
      dispatch(action);
  }, []);
};

export default function App () {

  /* const devices = useSelector(state => state.camera.devices);
  let deviceId = useSelector(state => state.camera.deviceId); */
  let facingMode = useSelector(state => state.camera.facingMode);

  const dispatch = useDispatch();
  useFetching(getDevices(), dispatch);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      alert('Imagen guardada');
    },
    [webcamRef]
  );

  const stop = () => {
    let stream = webcamRef.current.video.srcObject;
    const tracks = stream.getTracks();
    
    tracks.forEach(track => track.stop());
    webcamRef.current.video.srcObject = null;
  };

  const changeFacingMode = (facingMode) => {
      dispatch(switchFacingMode(facingMode));
  }
 console.log('actual facingmode', facingMode);
  return (
    <div className="container">
      <div id="vid_container">
      <Webcam
        audio={false} 
        videoConstraints={{ facingMode: facingMode }}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
        <div id="video_overlay"></div>
    </div>
      
       <div id="controls">
         {/* <CameraDropdown className="leftButton" devices={devices}/> */}
          <button className="leftButton" onClick={() => {stop(); changeFacingMode(facingMode);}} name="switch Camera" type="button" aria-pressed="false">Abbruch</button>
          <button className="takePhotoButton" onClick={capture} name="take Photo" type="button"></button>
          <button className="rightButton" name="toggle FullScreen" type="button" aria-pressed="false">Fertig</button>
      </div>
    </div>
  );
};