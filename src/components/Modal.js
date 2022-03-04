import React from "react";
import { NavLink } from "react-router-dom";
import { ModalStyle } from "../style-components/Modal";

const Modal = ({ showModal, ref }) => {



  return (
    <>
      <ModalStyle onClick={showModal}>
        <div
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
          className="modal__content"
        >
          <span className="modal__smile">&#128521;</span>
          <h2>Thank You</h2>
          <p>I'll contact you soon</p>
          <NavLink to="/">
            <button className="modal__close__button" onClick={showModal}>
              Return to Home Page
            </button>
          </NavLink>
        </div>
      </ModalStyle>
    </>
  );
};

export default Modal;
