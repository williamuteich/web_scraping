import React, { useEffect } from 'react';
import Modal from 'react-modal';

interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode; // Adicionando a propriedade children ao tipo CustomModalProps
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onRequestClose, children }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      contentLabel='Book Modal'
      style={{
        overlay: {
          backgroundColor: 'rgb(71 71 71 / 33%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#8d8d8d8c'
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
