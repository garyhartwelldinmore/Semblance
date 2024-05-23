import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("index")
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    @Render('index.hbs')
    getIndex() {
        return { message: 'Hello world!' };
    }

}
