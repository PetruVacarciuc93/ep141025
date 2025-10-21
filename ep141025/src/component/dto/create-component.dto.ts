import { ApiProperty } from '@nestjs/swagger';

export class CreateComponentDto {
  @ApiProperty({ description: 'Tipul componentei', example: 'GPU' })
  type: string;

  @ApiProperty({ description: 'Modelul componentei', example: 'RTX 4070' })
  model: string;

  @ApiProperty({ description: 'Prețul componentei', example: 1500 })
  price: number;

  @ApiProperty({ description: 'ID-ul PC-ului la care aparține componenta', example: 1 })
  pcId: number;
}
