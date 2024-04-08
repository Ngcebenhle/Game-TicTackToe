import React, { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";
// import * as ReactDOM from 'react-dom';
import ReactDOM from "react-dom";

// Styles
import { ModalBackdrop, ModalContainer } from "./Modal.Styles";

const ModalTemplate = () => {
  const { modalContent, modal } = useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <ModalBackdrop>
        <ModalContainer>{modalContent}</ModalContainer>
      </ModalBackdrop>,
      document.getElementById("modal-root")
    );
  }
 
};

export default ModalTemplate;
