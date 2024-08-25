import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { School } from './entities/school.entity';
import { Address } from './entities/address.entity';
import { Organization } from './entities/organization.entity';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(School)
    private schoolRepository: Repository<School>,
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  async createOrUpdateSchool(schoolDto: School, id?: number): Promise<School> {
    let school: School;

    if (id) {
      school = await this.schoolRepository.findOne({ where: { id } });
      if (!school) throw new Error('School not found');
    } else {
      school = new School();
    }

    school.name = schoolDto.name;
    school.status = schoolDto.status;
    school.startTime = schoolDto.startTime;
    school.endTime = schoolDto.endTime;
    school.shift = schoolDto.shift;
    school.hasProjector = schoolDto.hasProjector;
    school.hasLaptop = schoolDto.hasLaptop;

    let address = await this.addressRepository.findOne({ where: { address: schoolDto.address.address } });
    if (!address) {
      address = this.addressRepository.create(schoolDto.address);
      await this.addressRepository.save(address);
    }

    let organization = await this.organizationRepository.findOne({ where: { name: schoolDto.organization.name } });
    if (!organization) {
      organization = this.organizationRepository.create(schoolDto.organization);
      await this.organizationRepository.save(organization);
    }

    school.address = address;
    school.organization = organization;

    return await this.schoolRepository.save(school);
  }

  async getSchoolById(id: number): Promise<School> {
    return await this.schoolRepository.findOne({ where: { id }, relations: ['address', 'organization'] });
  }

  async getAllSchools(): Promise<School[]> {
    return await this.schoolRepository.find({ relations: ['address', 'organization'] });
  }

  async deleteSchool(id: number): Promise<void> {
    await this.schoolRepository.delete(id);
  }
}
