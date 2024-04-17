import React, { useEffect } from 'react';
import Modal from 'react-modal';

interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onRequestClose, children }) => {

  useEffect(() => {
    const handleBodyOverflow = () => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'; 
      } else {
        document.body.style.overflow = ''; 
      }
    };

    handleBodyOverflow(); // Executa a função ao montar o componente

    return () => {
      document.body.style.overflow = ''; // Limpa o estilo de overflow ao desmontar o componente
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      contentLabel='Book Modal'
      shouldCloseOnOverlayClick={false}
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
