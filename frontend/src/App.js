import React,{useEffect} from 'react';
import Webcam from "react-webcam";
import { Modal, Button } from 'antd';
import ConfirmModal from './Components/ConfirmModal';
import { useDispatch, useSelector } from "react-redux";
import {switchFacingMode, sendPhoto, takePhoto, cancelPhoto} from './actions/camera';
import './App.css';
 

export default function App () {
  let facingMode = useSelector(state => state.camera.facingMode);
  let cameraState = useSelector(state => state.camera);
  console.log(cameraState);

  const dispatch = useDispatch();

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      dispatch(takePhoto(imageSrc));
    },
    [webcamRef]
  );

  const deletePhoto = () => {
    dispatch(cancelPhoto());
  }

  const successModal = () => {
    Modal.success({
      content: 'Sent Successfully',
    });
  }
  //Switch Camera
  /* const stop = () => {
    let stream = webcamRef.current.video.srcObject;
    const tracks = stream.getTracks();
    
    tracks.forEach(track => track.stop());
    webcamRef.current.video.srcObject = null;
  };

  const changeFacingMode = (facingMode) => {
      stop();
      dispatch(switchFacingMode(facingMode));
  } */
 
  return (
    <div className="container">
      <div id="vid_container">
        {
          cameraState.taked ? <img src={cameraState.photo} /> : 
          <Webcam
          audio={false} 
          videoConstraints={{ facingMode: facingMode }}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />  
        }
        <div id="video_overlay"></div>
    </div>
      
       <div id="controls">
          <button className="leftButton" onClick={deletePhoto} name="switch Camera" type="button" aria-pressed="false">Abbruch</button>
          <button className="takePhotoButton" onClick={capture} name="take Photo" type="button"></button>
          <ConfirmModal />
      </div>
    </div>
  );
};