import { IsString, IsNumber, IsEnum, IsOptional } from 'class-validator';

export class PlaceOrderDto {
  @IsString()
  stockNo: string;

  @IsEnum(['B', 'S'])
  buySell: string;

  @IsOptional()
  @IsNumber()
  price: number

  @IsNumber()
  quantity: number;

  @IsEnum(['1', '2', '3', '4', '5'])
  apCode: string;

  @IsEnum(['0', '1', '2', '3', '4'])
  priceFlag: string;

  @IsEnum(['R', 'I', 'F'])
  bsFlag: string;

  @IsEnum(['0', '3', '4', 'A'])
  trade: string;
}
