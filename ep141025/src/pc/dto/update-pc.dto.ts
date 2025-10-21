import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePCDto {
  @ApiPropertyOptional({ description: 'Numele PC-ului', example: 'Gaming PC' })
  name?: string;

  @ApiPropertyOptional({ description: 'Producătorul PC-ului', example: 'Dell' })
  manufacturer?: string;

  @ApiPropertyOptional({ description: 'Numărul total de componente', example: 5 })
  totalComponents?: number;
}
