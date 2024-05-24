import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) { }

    @Post('file')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads', // save file in the uploads folder
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = extname(file.originalname);
                const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
                callback(null, filename);
            },
        }),
        fileFilter: (req, file, callback) => {
            if (!file.originalname.match(/\.(xlsx|xls|docx|doc)$/)) {
                return callback(new Error('Only excel and word files are allowed!'), false);
            }
            callback(null, true);
        },
    }))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        const outputPdfPath = `./uploads/${file.filename.split('.')[0]}.pdf`;
        await this.uploadService.transformExcelToPdf(file.path, outputPdfPath);
        return { message: 'File converted successfully', pdfPath: outputPdfPath };
    }
}
