import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const pdfDoc = await PDFDocument.create();

  // Embed a font
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  // Add a blank page to the document
  const page = pdfDoc.addPage([600, 400]);

  // Draw some text
  page.drawText('This is a dynamically generated PDF!', {
    x: 50,
    y: 350,
    size: 20,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  // Embed an image (assumed to be in the public directory)
  const imagePath = path.join(process.cwd(), 'public/images/example.png');
  const imageBytes = fs.readFileSync(imagePath);
  const image = await pdfDoc.embedPng(imageBytes);
  const imageDims = image.scale(0.5);

  // Draw the image
  page.drawImage(image, {
    x: 50,
    y: 200,
    width: imageDims.width,
    height: imageDims.height,
  });

  // Draw an SVG (assume it's a simple string for example)
  page.drawText('Example SVG Content', {
    x: 50,
    y: 150,
    size: 15,
    font: timesRomanFont,
    color: rgb(0, 0.5, 0),
  });

  // Add a clickable link
  page.drawText('Click me to go to Google', {
    x: 50,
    y: 100,
    size: 15,
    font: timesRomanFont,
    color: rgb(0, 0, 1),
  });

  const linkAction = pdfDoc.catalog.addAction({
    S: 'URI',
    URI: 'https://www.google.com',
  });

  page.node.addAnnotation({
    Type: 'Annot',
    Subtype: 'Link',
    Rect: [50, 90, 150, 110],
    A: linkAction,
  });

  // Serialize the PDFDocument to bytes
  const pdfBytes = await pdfDoc.save();

  // Set response headers to serve the PDF as a download
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="example.pdf"');

  // Send the PDF bytes as the response
  res.send(Buffer.from(pdfBytes));
}