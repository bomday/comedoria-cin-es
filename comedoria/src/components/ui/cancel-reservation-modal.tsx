import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  confirmText: string;
  cancelText: string;
  description?: string; // Novo campo opcional para descrição extra
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmText,
  cancelText,
  description, // Descrição opcional
}: ConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="rounded-lg shadow-lg"
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ position: 'relative', paddingBottom: '10px' }}>
          <DialogHeader>
            <DialogTitle
              style={{
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '10px',
              }}
            >
              {title}
            </DialogTitle>
            {description && <p style={{ textAlign: 'center', fontSize: '14px' }}>{description}</p>}
          </DialogHeader>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              right: '16px',
              top: '16px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <X style={{ height: '20px', width: '20px' }} />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            onClick={onConfirm}
            style={{
              flex: 1,
              backgroundColor: '#AED970',
              color: 'white',
              padding: '12px 20px',
              fontSize: '14px',
              borderRadius: '8px',
            }}
          >
            {confirmText}
          </Button>
          <Button
            onClick={onClose}
            style={{
              flex: 1,
              backgroundColor: '#FF6B6B',
              color: 'white',
              padding: '12px 20px',
              fontSize: '14px',
              borderRadius: '8px',
            }}
          >
            {cancelText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
