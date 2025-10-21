import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePCDto } from './dto/create-pc.dto';
import { UpdatePCDto } from './dto/update-pc.dto';

type PCType = {
  id: number;
  name: string;
  manufacturer: string;
  totalComponents: number;
  components: any[];
};

@Injectable()
export class PCService {
  private pcs: PCType[] = [];

  create(dto: CreatePCDto) {
    const pc: PCType = { id: this.pcs.length + 1, ...dto, components: [] };
    this.pcs.push(pc);
    return pc;
  }

  findAll() {
    return this.pcs;
  }

  async findOne(id: number) {
    const pc = this.pcs.find(p => p.id === id);
    if (!pc) throw new NotFoundException('PC not found');
    return pc;
  }

  async update(id: number, dto: UpdatePCDto) {
    const pc = await this.findOne(id);
    Object.assign(pc, dto);
    return pc;
  }

  async remove(id: number) {
    const index = this.pcs.findIndex(p => p.id === id);
    if (index === -1) throw new NotFoundException('PC not found');
    const [removed] = this.pcs.splice(index, 1);
    return removed;
  }
}
