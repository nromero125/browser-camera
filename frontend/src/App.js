import React from 'react';
import Webcam from "react-webcam";
import './App.css';

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = { 
  facingMode: FACING_MODE_USER
};
 
export default function App () {
  const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);

  const webcamRef = React.useRef(null);

  const handleClick = React.useCallback(() => {
    setFacingMode(
      prevState =>
        prevState === FACING_MODE_USER
          ? FACING_MODE_ENVIRONMENT
          : FACING_MODE_USER
    );
  }, []);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
    },
    [webcamRef]
  );
    
 
  return (
    <div className="container">
      <div id="vid_container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
        <div id="video_overlay"></div>
    </div>
      
       <div id="controls">
          <button className="leftButton" onClick={handleClick} name="switch Camera" type="button" aria-pressed="false">Abbruch</button>
          <button className="takePhotoButton" onClick={capture} name="take Photo" type="button"></button>
          <button className="rightButton" name="toggle FullScreen" type="button" aria-pressed="false">Fertig</button>
      </div>
    </div>
  );
};