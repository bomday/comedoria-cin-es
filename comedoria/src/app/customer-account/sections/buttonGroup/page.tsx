'use client';

import { Button } from "@/components/ui/button";
import EditInfo from "@/components/ui/EditInfoPopup";
import { useState } from 'react';
import MessageModal from '@/components/ui/message-modal';

// Componente ButtonGroup para os botões de ação
export default function ButtonGroup() {
    // Estados para controlar a visibilidade dos modais
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false); // Estado para o modal de redefinição de senha
  
    // Funções para abrir e fechar o modal de edição
    const handleOpenEditModal = () => setIsEditModalOpen(true);
    const handleCloseEditModal = () => setIsEditModalOpen(false);
  
    // Função para salvar mudanças no modal de edição
    const handleSaveChanges = () => {
      console.log('Salvando mudanças...');
      // Lógica para salvar as informações
      setIsEditModalOpen(false); // Fechar o modal após salvar
    };

    // Funções para abrir e fechar o modal de redefinição de senha
    const handleOpenResetPasswordModal = () => setIsResetPasswordModalOpen(true);
    const handleCloseResetPasswordModal = () => setIsResetPasswordModalOpen(false);

    // Função para confirmar a redefinição da senha
    const handleConfirmResetPassword = () => {
      setIsResetPasswordModalOpen(false); // Fechar o modal após confirmar
    };

    return (
        <div className="rubik-600 text-background flex flex-col space-y-4 mt-5">
          <Button 
            className="w-48 bg-brown hover:bg-brown-hover text-white py-3"
            onClick={handleOpenEditModal}
          >
            Editar Informações
          </Button>
          <Button 
            className="w-48 bg-[rgba(var(--light-yellow))] hover:bg-[#F2BF5E]/80 text-white py-3"
            onClick={handleOpenResetPasswordModal}
          >
            Redefinir Senha
          </Button>
      
          {/* Modal de Edição */}
          <EditInfo 
            isOpen={isEditModalOpen} 
            onClose={handleCloseEditModal} 
            onSave={handleSaveChanges} 
          />
      
          {/* Modal de Mensagem */}
          <MessageModal
            isOpen={isResetPasswordModalOpen}
            onClose={handleCloseResetPasswordModal}
            message="Um e-mail foi enviado para você com o passo a passo para redefinir a senha."
          />
        </div>
      );
      
}
