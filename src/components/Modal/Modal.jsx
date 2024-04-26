import { createPortal } from 'react-dom';

export const Modal = ({ children, onClose }) => {
  if (!children) return null;
  function handleEscape(event) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  return createPortal(
    <div className="modal">
      <div className="modal__content">
        <button
          className="modal__close"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}