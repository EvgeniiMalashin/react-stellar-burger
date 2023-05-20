import modalOverlayStyle from "./modal-overlay.module.css";
import PropTypes from 'prop-types';

function ModalOverlay({onClose}) {
  return (
    <div className={modalOverlayStyle.overlay} onClick={onClose}></div>
  )
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default ModalOverlay;