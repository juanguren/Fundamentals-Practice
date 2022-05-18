import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { DataService } from './data.service';
import { CreateDatumDto } from './dto/create-datum.dto';
import { MyValidation } from './validation-pipes';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  // * Via req.body
  /* @Post()
  create(@Body() createDatumDto: CreateDatumDto) {
    return this.dataService.create(createDatumDto);
  } */

  @Get(':keyName')
  async getOneItem(@Param('keyName') keyName: string) {
    return this.dataService.getOneItem(keyName);
  }

  // * Via API
  // ! Example of a built-in validation pipe (for Params)
  @Post('create/many/:amount')
  async createMany(@Param('amount', new ParseIntPipe()) amount: number) {
    return this.dataService.createMany(amount);
  }

  // * Via API
  // ! Example of a custom-built validation pipe (For Query params)
  @Post('/create/:id')
  async createOne(@Param('id') id: string, @Query('keyName') keyName: string) {
    return this.dataService.createOne(id, keyName);
  }

  @Put(':keyName')
  async updateOne(
    @Param('keyName') keyName: string,
    @Query('randomId') randomId: string,
  ) {
    return this.dataService.updateOneItem(keyName, randomId);
  }
}
