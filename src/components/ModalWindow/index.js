import React, { useState } from 'react';
import Modal from 'react-modal';
import crosshair from '../../assets/crosshair.svg';
import './index.css'

const customStyles = {
    content : {
      top                   : '300px',
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
    console.log('Info', info);
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }


    return (
        <div>
        <span className="more-block" onClick={openModal}> Більше </span>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal}
          portalClassName="modal"
        >   
            {info.image && <img src={info.image} alt="News" />}
            <div className="modal-header">
              <h3 className="modal-title">{info.title}</h3>
              <input type="image" src={crosshair} alt="crosshair" onClick={closeModal}/>
            </div>      
            <p>{info.information}</p>
            <p>{info.additionalInformation}</p>
        </Modal>
      </div>
    )
}