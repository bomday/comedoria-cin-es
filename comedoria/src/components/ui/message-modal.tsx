import React from 'react';

interface MessageModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ isOpen, message, onClose }) => {
  // Não renderiza o modal se isOpen for false
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="edit-staff-modal-content bg-white rounded-lg shadow-lg w-[400px] p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <p className="text-center font-bold text-xl">
          {message}
        </p>
      </div>
    </div>
  );
};

export default MessageModal;
