import React, { useState } from "react";
import { Modal } from "antd";
import { sendPhoto, cancelPhoto } from "../actions/camera";
import { useDispatch, useSelector } from "react-redux";

export default function ConfirmModal() {
  let cameraState = useSelector(state => state.camera);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [ModalText, setModalText] = useState("");
  const showModal = () => {
    if (cameraState.photo) {
      setVisible(!visible);
      setModalText("Are you sure that you want to send this document?");
    }
  };

  const handleOk = () => {
    setModalText("Sending...");
    dispatch(sendPhoto(cameraState.photo));
    setVisible(!visible);
    dispatch(cancelPhoto());
  };

  const handleCancel = () => {
    setVisible(!visible);
    dispatch(cancelPhoto());
  };

  return (
    <div>
      <button
        className="rightButton"
        onClick={showModal}
        name="toggle FullScreen"
        type="button"
        aria-pressed="false"
      >
        Fertig
      </button>

      <Modal
        title="Send Document"
        visible={visible}
        onOk={handleOk}
        confirmLoading={cameraState.isFetching}
        onCancel={handleCancel}
      >
        <p>{ModalText}</p>
      </Modal>
    </div>
  );
}
