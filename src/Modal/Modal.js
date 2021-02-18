import React, { useRef, useEffect } from 'react';
import './Modal.css';


export const Modal = ({ close, show, fag }) => {
  

  

  return (
    <>

    <div className="modal-wrapper"
        style= {{
            opacity: show ? '1' : 0
        }}
    >
        <div className="modal-header">
            <p>Welcome</p>
            <span onClick={close} className='close-modal-btn' >X</span>
        </div>
        <div className="modal-content">
            <div className="modal-body">
                <h4>Modal</h4>
                <p >{}</p>
            
            <div className="modal-footer">
                <button onClick={close} className='btn-cancel'>Close</button>
            </div>
            </div>
        </div>

    </div>




    </>
  );
};