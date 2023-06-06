import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyle from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from 'prop-types';
const reactModals = document.getElementById("react-modals");
function Modal({ children, onClose, title }) {
  React.useEffect(() => {
    function closeEsc(evt) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', closeEsc);
    return () => {
      document.removeEventListener('keydown', closeEsc);
    }
  })

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={modalStyle.container}>
        <div className={modalStyle.header}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button className={modalStyle.button} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        <div className={modalStyle.component}>{children}</div>
      </div>
    </>,
    reactModals
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default Modal;