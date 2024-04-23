import { Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

interface IUser {
	id: string
	name: string
	email: string

}
@ObjectType()
@Entity()
export class User implements IUser {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id: string

	@Column()
	name: string

	@Column()
	email: string

}