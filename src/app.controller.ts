import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SchoolService } from './school/school.service';
import { School } from './school/entities/school.entity';

@Controller('schools')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async createSchool(@Body() schoolData: any) {  // Using 'any' instead of DTO
    return await this.schoolService.createOrUpdateSchool(schoolData);
  }

  @Put(':id')
  async updateSchool(@Param('id') id: number, @Body() schoolData: any) {  // Using 'any' instead of DTO
    return await this.schoolService.createOrUpdateSchool(schoolData, id);
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
