import modalOverlayStyle from "./modal-overlay.module.css";


function ModalOverlay({ onClose }: any) {
  return (
    <div className={modalOverlayStyle.overlay} onClick={onClose}></div>
  )
}



export default ModalOverlay;