import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './app.service';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hey/:id')
  getMoreData(@Param('id') id): any {
    console.log(id);
    return this.appService.getMoreData(id);
  }
}
