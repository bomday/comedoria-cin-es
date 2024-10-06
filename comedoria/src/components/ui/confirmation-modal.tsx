import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  confirmText: string
  cancelText: string
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmText,
  cancelText
}: ConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
      className="w-full sm:max-w-[400px] md:max-w-[500px] xl:max-w-[402px] p-0 overflow-hidden">
        <div className="relative pt-6 px-6 pb-1">
          <DialogHeader>
            <DialogTitle className="text-center pr-4 text-lg"
            style={{fontSize: '24.36px',}}>
                {title}
                </DialogTitle>
          </DialogHeader>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div className="flex p-4 bg-gray-50">
          <Button 
            variant="destructive" 
            onClick={onConfirm}
            className="flex-1 mr-2 h-12"
            style={{ backgroundColor: '#AED970', color: 'white' }}
          >
            {confirmText}
          </Button>
          <Button 
            variant="secondary" 
            onClick={onClose} 
            className="flex-1 ml-2 h-12"
            style={{ backgroundColor: '#FF6B6B', color: 'white' }}
          >
            {cancelText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}