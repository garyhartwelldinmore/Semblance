/*
 * @Description: 
 * @Autor: jiayinchu
 * @Date: 2024-05-24 10:35:09
 * @LastEditors: jiayinchu
 * @LastEditTime: 2024-05-24 15:39:50
 */
import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { PDFDocument, rgb } from 'pdf-lib';
import * as fs from 'fs';

@Injectable()
export class UploadService {

    async transformExcelToPdf(excelFilePath: string, outputPdfPath: string): Promise<void> {
        // Read the Excel file
        const workbook = XLSX.readFile(excelFilePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Create a new PDF document
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();
        const { width, height } = page.getSize();
        const fontSize = 12;
       
        // Add data from Excel to PDF
        let y = height - fontSize;
        data.forEach((row: any) => {
            let text = row.join(' ');
            const pageWidth = page.getWidth();
            const textWidth = fontSize * text.length;
            const x = (pageWidth - textWidth) / 2;
            page.drawText(text, {
                x: x,
                y: y,
                size: fontSize,
                color: rgb(0, 0, 0),
            });
            y -= fontSize + 2; // Move to the next line
        });

        // Save the PDF to the file system
        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync(outputPdfPath, pdfBytes);
    }
}
