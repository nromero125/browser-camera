import React,{useEffect} from 'react';
import Webcam from "react-webcam";
import CameraDropdown from './Components/CameraDropdown';
import { useDispatch, useSelector } from "react-redux";
import {getDevices} from './actions/camera';
import './App.css';
 

const useFetching = (action, dispatch) => {
  useEffect( () => {
      dispatch(action);
  }, []);
};

export default function App () {
  const devices = useSelector(state => state.camera.devices);
  let selectedDevice = useSelector(state => state.camera.selectedDevice);
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
  
  console.log(devices);
  console.log(selectedDevice);
 
  return (
    <div className="container">
      <div id="vid_container">
      <Webcam
        audio={false} 
        videoConstraints={{ selectedDevice }}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
        <div id="video_overlay"></div>
    </div>
      
       <div id="controls">
         <CameraDropdown className="leftButton" devices={devices}/>
          {/* <button className="leftButton" onClick={showDevices} name="switch Camera" type="button" aria-pressed="false">Abbruch</button> */}
          <button className="takePhotoButton" onClick={capture} name="take Photo" type="button"></button>
          <button className="rightButton" name="toggle FullScreen" type="button" aria-pressed="false">Fertig</button>
      </div>
    </div>
  );
};