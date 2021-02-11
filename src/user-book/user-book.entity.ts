import { Usertbl } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserBook {
    @PrimaryGeneratedColumn()
    hasBookId: number

    @Column()
    Bookid: number

    @Column()
    BookName: string

    @Column()
    Author: string

    @Column()
    userId: number

    @Column()
    Uname: string

    @Column()
    Uemail: string

    @Column({ default: false })
    BookIssue: boolean

    @Column()
    issueDate: Date;

    @Column()
    receiveDate: Date;

}
