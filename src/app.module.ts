import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST ||'127.0.0.1',
      port: +process.env.DATABASE_PORT || 5432,
      username: process.env.DATABASE_USERNAME ||'postgres',
      password: process.env.DATABASE_PASSWORD || '123',
      database:  process.env.DATABASE_NAME || 'school_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    SchoolModule,
  ],
})
export class AppModule {}
