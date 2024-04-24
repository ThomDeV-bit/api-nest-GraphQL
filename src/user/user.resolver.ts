import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserDTO } from 'src/dto/user.dto';
import { User } from 'src/entites/user.entity';

@Resolver('User')
export class UserResolver {
	constructor(
		private readonly userService: UserService
	) { }

	@Query(() => [User])
	async findaAll(): Promise<User[]> {
		return await this.userService.findAll()
	}

	@Query(() => User)
	async findaBy(@Args('id') id: string): Promise<User> {
		return await this.userService.findByiD(id)
	}


	@Mutation(() => User)
	async createUser(@Args('data') data: UserDTO): Promise<User> {
		return await this.userService.creatUser(data)
	}


	@Mutation(() => User)
	async updateUser(@Args('id') id: string, @Args('data') data: UserDTO): Promise<User> {
		return await this.userService.updateUser(id, data)
	}

	@Mutation(() => Boolean)
	async deleteUser(@Args('id') id: string): Promise<Boolean> {
		return await this.userService.deletUser(id)
	}
}
