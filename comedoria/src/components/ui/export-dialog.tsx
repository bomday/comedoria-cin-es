import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ExportStatisticsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onExportPDF: () => void;
    onExportCSV: () => void;
}

const ExportStatisticsModal: React.FC<ExportStatisticsModalProps> = ({
    isOpen,
    onClose,
    onExportPDF,
    onExportCSV
}) => {
    if (!isOpen) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="sr-only">Exportar estatísticas</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <Button
                        className="w-full py-6 text-lg font-semibold bg-[#5C6D3F] hover:bg-[#4A5A2F] text-[#FFFFFF]"
                        onClick={onExportPDF}
                    >
                        Exportar estatísticas como PDF
                    </Button>
                    <Button
                        className="w-full py-6 text-lg font-semibold bg-[#8B4513] hover:bg-[#723A0F] text-[#FFFFFF]"
                        onClick={onExportCSV}
                    >
                        Exportar estatísticas como CSV
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ExportStatisticsModal;
