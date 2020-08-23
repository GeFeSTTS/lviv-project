import React, { useState } from 'react';
import Modal from 'react-modal';
import crosshair from '../../assets/crosshair.svg';
import ReactHtmlParser from 'react-html-parser';
import './index.css'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      height                : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    },
    overlay : {
      'z-index'             : '9999',
      backgroundColor       : 'rgba(255, 255, 255, 0.8)'
    }
  };

export default function ModalWindow ({ info }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }


    return (
      <>
        <span className="more-block" onClick={openModal}> . . .</span>
        <div>
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            onRequestClose={closeModal}
            portalClassName="modal"
          >   
              <input className="modal-close-btn-mobile" type="image" src={crosshair} alt="crosshair" onClick={closeModal}/>
              {info.validImage && <img src={info.validImage} alt="News" />}
              <div className="modal-header">
                <h3 className="modal-title">{info.title}</h3>
                <input className="modal-close-btn" type="image" src={crosshair} alt="crosshair" onClick={closeModal}/>
              </div>      
              <p>{ReactHtmlParser(info.description)}</p>
          </Modal>
        </div>
      </>
    )
}