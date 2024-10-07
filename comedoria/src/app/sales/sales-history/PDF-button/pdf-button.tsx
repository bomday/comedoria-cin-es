'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { SaleData } from '@/app/sales/sales-history/type-sale/';
import { PDFPage } from 'pdf-lib';

interface PDFButtonProps {
  salesData: SaleData[];
}

const PDFButton: React.FC<PDFButtonProps> = ({ salesData }) => {
  const generatePDF = async () => {
    // Importação dinâmica da biblioteca pdf-lib
    const { PDFDocument, rgb, StandardFonts } = await import('pdf-lib');

    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 3;
    const rowHeight = 20;

    const addPage = () => {
      const page = pdfDoc.addPage();
      const { width, height } = page.getSize();
      return { page, width, height };
    };

    const addContentToPage = (page: PDFPage, startY: number) => {
      const { width, height } = page.getSize();
      let yPosition = startY;

      // Add title
      page.drawText('Histórico de Vendas', {
        x: 50,
        y: height - 50,
        size: 18,
        font,
        color: rgb(0, 0, 0),
      });

      // Define table structure
      const columns = ['Salgados', 'Vendedor', 'Cliente', 'Tipo', 'Data / Hora', 'Valor'];

      // Draw table header
      columns.forEach((column, index) => {
        page.drawText(column, {
          x: 50 + index * 80,
          y: yPosition,
          size: fontSize,
          font,
          color: rgb(0, 0, 0),
        });
      });

      yPosition -= rowHeight;

      return yPosition;
    };

    let { page, height } = addPage();
    let yPosition = addContentToPage(page, height - 100);

    // Draw table rows
    for (const sale of salesData) {
      const rowData = [sale.salgados, sale.vendedor, sale.cliente, sale.tipo, sale.dataHora, sale.valor];
      
      // Check if we need a new page
      if (yPosition < 50) {
        ({ page, height } = addPage());
        yPosition = addContentToPage(page, height - 100);
      }

      rowData.forEach((text, index) => {
        page.drawText(text, {
          x: 50 + index * 80,
          y: yPosition,
          size: fontSize,
          font,
          color: rgb(0, 0, 0),
        });
      });
      yPosition -= rowHeight;
    }

    // Generate PDF file
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'historico_vendas.pdf';
    link.click();
  };

  return (
    <Button variant='btnGreen' className="text-beige" onClick={generatePDF}>
      Gerar PDF
    </Button>
  );
};

export default PDFButton;