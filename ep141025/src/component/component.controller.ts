import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ComponentService } from './component.service';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PCComponent } from './component.entity';

@ApiTags('Components')
@Controller('components')
export class ComponentController {
  constructor(private readonly compService: ComponentService) {}

  @Post()
  @ApiOperation({ summary: 'Creare Component' })
  @ApiResponse({ status: 201, description: 'Component creat', type: PCComponent })
  create(@Body() dto: CreateComponentDto) {
    return this.compService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Afișează toate Components' })
  findAll() {
    return this.compService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Afișează Component după ID' })
  findOne(@Param('id') id: number) {
    return this.compService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Component' })
  update(@Param('id') id: number, @Body() dto: UpdateComponentDto) {
    return this.compService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Șterge Component' })
  remove(@Param('id') id: number) {
    return this.compService.remove(+id);
  }
}
