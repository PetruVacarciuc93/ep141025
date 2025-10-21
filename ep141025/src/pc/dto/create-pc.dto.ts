import { ApiProperty } from '@nestjs/swagger';

export class CreatePCDto {
  @ApiProperty({ description: 'Numele PC-ului', example: 'Gaming PC' })
  name: string;

  @ApiProperty({ description: 'Producătorul PC-ului', example: 'Dell' })
  manufacturer: string;

  @ApiProperty({ description: 'Numărul total de componente', example: 5 })
  totalComponents: number;
}
