import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PC } from '../pc/pc.entity';

@Entity()
export class PCComponent {   // << Schimbă aici numele clasei
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  model: string;

  @Column('decimal')
  price: number;

  @ManyToOne(() => PC, pc => pc.components, { onDelete: 'CASCADE' })
  pc: PC;
}
