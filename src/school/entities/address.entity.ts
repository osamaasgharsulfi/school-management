import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  town: string;

  @Column()
  tehsil: string;

  @Column()
  district: string;

  @Column()
  state: string;

  @Column()
  address: string;

  @Column('decimal')
  latitude: number;

  @Column('decimal')
  longitude: number;
}
