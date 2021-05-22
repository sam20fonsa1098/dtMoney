import Modal from 'react-modal';
import { CustomModalProps } from './interfaces';
import closeImg from '../../assets/close.svg';

const CustomModal: React.FC<CustomModalProps> = (
  { 
    isOpen, 
    handleOnChangeIsOpen, 
    children
  }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={handleOnChangeIsOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">
      <button 
        type="button" 
        onClick={handleOnChangeIsOpen}
        className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      {children}
    </Modal>
  );
};

export { CustomModal };