import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SchoolService } from './school.service';
import { School } from './entities/school.entity';

@Controller('schools')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async createSchool(@Body() schoolDto: School) {
    return await this.schoolService.createOrUpdateSchool(schoolDto);
  }

  @Put(':id')
  async updateSchool(@Param('id') id: number, @Body() schoolDto: School) {
    return await this.schoolService.createOrUpdateSchool(schoolDto, id);
  }

  @Get(':id')
  async getSchoolById(@Param('id') id: number) {
    return await this.schoolService.getSchoolById(id);
  }

  @Get()
  async getAllSchools() {
    return await this.schoolService.getAllSchools();
  }

  @Delete(':id')
  async deleteSchool(@Param('id') id: number) {
    return await this.schoolService.deleteSchool(id);
  }
}
