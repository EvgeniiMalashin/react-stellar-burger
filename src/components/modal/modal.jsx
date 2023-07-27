import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyle from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from 'prop-types';
import { removeCurrentOrder } from "../../services/actions/order";
import { useDispatch } from "react-redux";

function Modal({ children, onClose, title }) {
  const dispatch = useDispatch();
  const reactModals = document.getElementById("react-modals");
  React.useEffect(() => {
    function closeEsc(evt) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', closeEsc);
    dispatch(removeCurrentOrder());
    return () => {
      document.removeEventListener('keydown', closeEsc);
      dispatch(removeCurrentOrder());
    }
  });

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