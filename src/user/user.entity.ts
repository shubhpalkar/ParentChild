import { Booktbl } from "src/book/book.entity";
import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Usertbl')
export class Usertbl extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

//   @OneToOne(type => UserDetails, {
//     cascade: true,
//     nullable: false,
//     eager: true,
//   })
//   @JoinColumn({ name: 'detail_id' })
//   details: UserDetails;


  @ManyToMany(type => Booktbl, book => book.authors)
  @JoinTable({ name: 'user_books' })
  books: Booktbl[];

}

