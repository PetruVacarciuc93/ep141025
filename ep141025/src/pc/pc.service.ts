import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PC } from './pc.entity';
import { CreatePCDto } from './dto/create-pc.dto';
import { UpdatePCDto } from './dto/update-pc.dto';

@Injectable()
export class PCService {
  constructor(@InjectRepository(PC) private pcRepo: Repository<PC>) {}

  create(dto: CreatePCDto) {
    const pc = this.pcRepo.create(dto);
    return this.pcRepo.save(pc);
  }

  findAll() {
    return this.pcRepo.find({ relations: ['components'] });
  }

  async findOne(id: number) {
    const pc = await this.pcRepo.findOne({ where: { id }, relations: ['components'] });
    if (!pc) throw new NotFoundException('PC not found');
    return pc;
  }

  async update(id: number, dto: UpdatePCDto) {
    const pc = await this.findOne(id);
    Object.assign(pc, dto);
    return this.pcRepo.save(pc);
  }

  async remove(id: number) {
    const pc = await this.findOne(id);
    return this.pcRepo.remove(pc);
  }
}
