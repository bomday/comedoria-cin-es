import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  confirmText: string
  cancelText: string
  description?: string
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmText,
  cancelText,
  description,
}: ConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-[350px] sm:max-w-[350px] p-0 overflow-hidden bg-white rounded-lg"
      style={{background:"white"}}
      onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <Button
          onClick={onClose}
          className="absolute right-2 top-2 p-1 rounded-full text-[#000000] bg-transparent hover:bg-gray-200"
        >
        </Button>
        <DialogHeader className="pt-6 px-5">
          <DialogTitle className="text-center text-lg advent-pro-700">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-center">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="flex flex-col sm:flex-row gap-2 p-6">
          <Button
            onClick={onConfirm}
            className="flex-1 bg-[#AED970] hover:bg-[#9DC560] text-white rubik-600 py-2 px-4 rounded"
            style={{ color: 'white' }}
          >
            {confirmText}
          </Button>
          <Button
            onClick={onClose}
            style={{ color: 'white' }}
            className="flex-1 bg-[#FF6B6B] hover:bg-[#E55A5A] text-white rubik-600 py-2 px-4 rounded"
          >
            {cancelText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}