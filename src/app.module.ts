import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { User } from './entites/user.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'db',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'nest_api',
    entities: [User],
    synchronize: true,
  }),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),

  }),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
