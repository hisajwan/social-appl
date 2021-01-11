import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";

// 'modal-root' is a sibling to 'app-root'
const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, onClose, open }) => {
  const blockName = "modal";
  // element to which the modal will be rendered
  const el = document.createElement("div");

  useEffect(() => {
    // append to root when the children of Modal are mounted
    modalRoot.appendChild(el);

    // do a cleanup
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return open
    ? ReactDOM.createPortal(
        <div onClick={onClose} className={blockName}>
          {children}
        </div>,
        el
      )
    : null;
};

export default Modal;
