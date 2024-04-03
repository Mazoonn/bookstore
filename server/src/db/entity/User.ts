import {Entity, PrimaryGeneratedColumn, Column, Unique} from 'typeorm';

@Entity()
@Unique('email', ['email'])
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    salt:string

    @Column()
    hashPass: string
}