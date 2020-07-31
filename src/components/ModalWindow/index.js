import React, { useState } from 'react';
import Modal from 'react-modal';
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

export default function ModalWindow ({info}) {
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
            <h3 className="modal-title">Створення міського фонду культури: як це буде</h3>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </Modal>
      </div>
    )
}