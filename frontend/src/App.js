import React from "react";
import Webcam from "react-webcam";
import ConfirmModal from "./components/ConfirmModal";
import { useDispatch, useSelector } from "react-redux";
import { takePhoto, cancelPhoto } from "./actions/camera";
import "./App.css";
import UIfx from "uifx";
import shutterSound from "./assets/Camera-Beep.mp3";

export default function App() {
    const bell = new UIfx(shutterSound, {
        volume: 0.4, // number between 0.0 ~ 1.0
        throttleMs: 100
    });

    let facingMode = useSelector(state => state.camera.facingMode);
    let cameraState = useSelector(state => state.camera);

    const dispatch = useDispatch();

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        bell.play();
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(takePhoto(imageSrc));
    }, [bell, dispatch]);

    const deletePhoto = () => {
        dispatch(cancelPhoto());
    };

    return (
        <div className="container">
            <div id="vid_container">
                {cameraState.taked ? (
                    <img src={cameraState.photo} />
                ) : (
                    <Webcam
                        className="border"
                        audio={false}
                        videoConstraints={{ facingMode: facingMode }}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                    />
                )}
            </div>

            <div id="controls">
                <button
                    className="leftButton"
                    onClick={deletePhoto}
                    name="switch Camera"
                    type="button"
                    aria-pressed="false"
                >
                    Abbruch
                </button>
                <div onClick={capture} className="takePhotoButton" />
                <ConfirmModal />
            </div>
        </div>
    );
}
