import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/dto/user.dto';
import { User } from 'src/entites/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>
	) { }

	async findAll(): Promise<User[]> {
		return await this.userRepository.find()
	}

	async findByiD(data: string): Promise<User> {
		return await this.userRepository.findOne({
			where: {
				id: data
			}
		})
	}

	async creatUser(data: UserDTO) {
		const user = this.userRepository.create(data)
		const userSaved = await this.userRepository.save(user)

		if (!userSaved) throw new InternalServerErrorException('Erro ao criar usuario')
		return userSaved
	}
}
