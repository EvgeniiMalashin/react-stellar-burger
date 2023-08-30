import modalOverlayStyle from "./modal-overlay.module.css";

type TModalOverlay = {
  onClose: () => void,
}

function ModalOverlay({ onClose }: TModalOverlay) {
  return (
    <div className={modalOverlayStyle.overlay} onClick={onClose}></div>
  )
}



export default ModalOverlay;