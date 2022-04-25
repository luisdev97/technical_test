import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { NumberType } from '../types/contact-number-type.enum';

@Entity()
export class ContactEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  mailingAddress: string;

  @Column()
  number: number;

  @Column({
    type: 'enum',
    enum: NumberType,
    default: NumberType.MOBILE,
  })
  numberType?: NumberType;

  @ManyToOne(() => ContactEntity)
  user: ContactEntity;

  @Column()
  userId: number;
}
