import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { Component } from './component.model';

@Injectable()
export class ComponentService {
  private components: Component[] = []; // folosește tipul Component

  create(dto: CreateComponentDto): Component {
    const component: Component = { id: this.components.length + 1, ...dto };
    this.components.push(component);
    return component;
  }

  findAll(): Component[] {
    return this.components;
  }

  findOne(id: number): Component {
    const component = this.components.find(c => c.id === id);
    if (!component) throw new NotFoundException('Component not found');
    return component;
  }

  update(id: number, dto: UpdateComponentDto): Component {
    const component = this.findOne(id);
    Object.assign(component, dto);
    return component;
  }

  remove(id: number): Component {
    const index = this.components.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException('Component not found');
    const [removed] = this.components.splice(index, 1);
    return removed;
  }
}
