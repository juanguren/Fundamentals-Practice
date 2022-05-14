import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateDatumDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  id: string;
}
