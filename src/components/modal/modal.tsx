import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyle from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";

type TModal = {
  children: React.ReactNode;
  onClose: () => void;
  title: string
};

function Modal({ children, onClose, title }: TModal) {

  const reactModals = document.getElementById("react-modals") as HTMLDivElement;
  React.useEffect(() => {
    function closeEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', closeEsc);

    return () => {
      document.removeEventListener('keydown', closeEsc);

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

export default Modal;