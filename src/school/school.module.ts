import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { School } from './entities/school.entity';
import { Address } from './entities/address.entity';
import { Organization } from './entities/organization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([School, Address, Organization])],
  controllers: [SchoolController],
  providers: [SchoolService],
})
export class SchoolModule {}
