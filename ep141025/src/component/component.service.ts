import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { PCService } from '../pc/pc.service';
import { PCComponent } from './component.entity';

@Injectable()
export class ComponentService {
  constructor(
    @InjectRepository(PCComponent) private compRepo: Repository<PCComponent>,
    private pcService: PCService,
  ) {}

  async create(dto: CreateComponentDto) {
    const pc = await this.pcService.findOne(dto.pcId);
    const component = this.compRepo.create({ ...dto, pc });
    return this.compRepo.save(component);
  }

  findAll() {
    return this.compRepo.find({ relations: ['pc'] });
  }

  async findOne(id: number) {
    const component = await this.compRepo.findOne({ where: { id }, relations: ['pc'] });
    if (!component) throw new NotFoundException('Component not found');
    return component;
  }

  async update(id: number, dto: UpdateComponentDto) {
    const component = await this.findOne(id);
    Object.assign(component, dto);
    return this.compRepo.save(component);
  }

  async remove(id: number) {
    const component = await this.findOne(id);
    return this.compRepo.remove(component);
  }
}
