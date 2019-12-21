import React from 'react';
import Webcam from "react-webcam";
import './App.css';
 
export default function App () {
  const webcamRef = React.useRef(null);
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      alert('Imagen guardada');
    },
    [webcamRef]
  );

  React.useEffect(
    () => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },
    [handleDevices]
  );

  const showDevices = () => {
      let devicesList = devices.map(device => device.label);
      alert(devicesList);
  }
    
 
  return (
    <div className="container">
      <div id="vid_container">
      <Webcam
        audio={false} 
        videoConstraints={{ deviceId }}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
        <div id="video_overlay"></div>
    </div>
      
       <div id="controls">
          <button className="leftButton" onClick={showDevices} name="switch Camera" type="button" aria-pressed="false">Abbruch</button>
          <button className="takePhotoButton" onClick={capture} name="take Photo" type="button"></button>
          <button className="rightButton" name="toggle FullScreen" type="button" aria-pressed="false">Fertig</button>
      </div>
    </div>
  );
};