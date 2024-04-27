import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import "./Modal.css";

export const Modal = ({ children, onClose, isOpen = false }) => {
  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);
  const render = (!children || !isOpen)

  function handleEscape(event) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  function overlayClick(event) {
    if (event.currentTarget === event.target) {
      onClose();
    }
  }

  return (
    render ? null :
      createPortal(
        <div className={`modal ${isOpen ? "modal--open" : ""}`} onClick={overlayClick}>
          <div className="modal__content">
            <div className="modal__overlay"></div>
            {children}
          </div>
        </div>,
        document.body
      ));
}

Modal.Header = ({ children }) => {
  return <header className="modal__header">{children}</header>;
}

Modal.Body = ({ children }) => {
  return <section className="modal__body">{children}</section>;
}

Modal.Footer = ({ children }) => {
  return <footer className="modal__footer">{children}</footer>;
}
