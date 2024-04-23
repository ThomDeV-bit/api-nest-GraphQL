import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserDTO } from 'src/dto/user.dto';
import { User } from 'src/entites/user.entity';
import { useContainer } from 'class-validator';

@Resolver('User')
export class UserResolver {
	constructor(
		private readonly userService: UserService
	) { }

	@Query(() => [User])
	async findaAll(): Promise<User[]> {
		return await this.userService.findAll()
	}

	@Mutation(() => User)
	async createUser(@Args('data') data: UserDTO): Promise<User> {
		return await this.userService.creatUser(data)
	}
}
