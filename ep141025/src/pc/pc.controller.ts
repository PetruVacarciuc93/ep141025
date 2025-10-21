import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { PCService } from './pc.service';
import { CreatePCDto } from './dto/create-pc.dto';
import { UpdatePCDto } from './dto/update-pc.dto';

@Controller('pcs')
export class PCController {
  constructor(private readonly pcService: PCService) {}

  @Post()
  create(@Body() dto: CreatePCDto) {
    return this.pcService.create(dto);
  }

  @Get()
  findAll() {
    return this.pcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePCDto) {
    return this.pcService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pcService.remove(Number(id));
  }
}
