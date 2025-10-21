import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateComponentDto {
  @ApiPropertyOptional({ description: 'Tipul componentei', example: 'GPU' })
  type?: string;

  @ApiPropertyOptional({ description: 'Modelul componentei', example: 'RTX 4070' })
  model?: string;

  @ApiPropertyOptional({ description: 'Prețul componentei', example: 1500 })
  price?: number;
}
