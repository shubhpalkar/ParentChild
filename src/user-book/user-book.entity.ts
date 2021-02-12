import { Usertbl } from "src/user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('UserBooks')
export class UserBook {
    @PrimaryGeneratedColumn()
    hasBookId: number

    @Column()
    Bookid: number

    @Column()
    BookName: string

    @Column()
    userId: number

    @Column()
    Uname: string

    @Column()
    Uemail: string

    @Column({ default: false })
    BookIssue: boolean

    @CreateDateColumn({ type: 'timestamp', name: 'created_atUserBook' })
    createdAtUserBook: Date;
  
    @UpdateDateColumn({ type: 'timestamp', name: 'updated_atUserBook' })
    updatedAtUserBook: Date;
}

