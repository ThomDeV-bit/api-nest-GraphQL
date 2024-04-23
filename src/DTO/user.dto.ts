import { Field, InputType, ObjectType } from "@nestjs/graphql"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"


@InputType()
@ObjectType()
export class UserDTO {
	@Field()
	@IsNotEmpty({ message: 'Usuario precisa ter um nome' })
	@IsString()
	name: string

	@IsEmail()
	@Field()
	@IsNotEmpty({ message: 'Usuario precisa ter um email' })
	email: string
}