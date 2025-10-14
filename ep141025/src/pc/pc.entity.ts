import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PCComponent } from '../component/component.entity';

@Entity()
export class PC {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  manufacturer: string;

  @Column()
  totalComponents: number;

  @OneToMany(() => PCComponent, component => component.pc, { cascade: true })
  components: PCComponent[];
}
