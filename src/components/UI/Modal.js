import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop show={props.show} clicked={props.close} />
      <div className="modal">
        <h1
          className={
            !props.error ? 'modal__title' : 'modal__title modal__title--error'
          }
        >
          {props.title}
        </h1>
        <div className="modal__content">{props.children}</div>
        <button onClick={props.close} className="modal__submit">
          OK
        </button>
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
