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

enum ValidQueries {
  KEY = 'KEY',
  VALUE = 'VALUE',
}

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  getAllItems() {
    return this.dataService.getAllItems();
  }

  // * Via req.body
  @Post()
  create(@Body() createDatumDto: CreateDatumDto) {
    return this.dataService.create(createDatumDto);
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
  async createOne(
    @Param('id') id: string,
    @Query('query', MyValidation) query: string,
  ) {
    return this.dataService.createOne(id, query);
  }

  @Put('/')
  getOneItem(@Query('id', MyValidation) query: string) {}
}
