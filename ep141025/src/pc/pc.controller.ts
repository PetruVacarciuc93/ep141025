import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PCService } from './pc.service';
import { CreatePCDto } from './dto/create-pc.dto';
import { UpdatePCDto } from './dto/update-pc.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PC } from './pc.entity';

@ApiTags('PCs')
@Controller('pcs')
export class PCController {
  constructor(private readonly pcService: PCService) {}

  @Post()
  @ApiOperation({ summary: 'Creare PC' })
  @ApiResponse({ status: 201, description: 'PC creat', type: PC })
  create(@Body() dto: CreatePCDto) {
    return this.pcService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Afișează toate PC-urile' })
  findAll() {
    return this.pcService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Afișează un PC după ID' })
  findOne(@Param('id') id: number) {
    return this.pcService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update PC' })
  update(@Param('id') id: number, @Body() dto: UpdatePCDto) {
    return this.pcService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Șterge PC' })
  remove(@Param('id') id: number) {
    return this.pcService.remove(+id);
  }
}
