import { Booktbl } from "src/book/book.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserBook } from '../user-book/user-book.entity'

@Entity('Users')
export class Usertbl extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_atUser' })
  createdAtUser: Date;

  @CreateDateColumn({ type: 'timestamp', name: 'updated_atUser' })
  updatedAtUser: Date;

}

