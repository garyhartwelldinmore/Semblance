import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {

    uploadFile(file: Express.Multer.File) {
        console.log(file);
        return {
            message: 'File uploaded successfully!',
            file,
        };
    }
}
