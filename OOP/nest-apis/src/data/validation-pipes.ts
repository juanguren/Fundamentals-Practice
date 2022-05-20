import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class MyValidation implements PipeTransform {
  transform(value: string) {
    if (value != 'HEY') throw new BadRequestException('Validation failed');
    return value.toLowerCase();
  }
}
