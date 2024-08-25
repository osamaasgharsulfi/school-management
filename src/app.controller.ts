import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getWelcomeMessage(): string {
    return 'Welcome to the School Management System API!';
  }

  @Get('health')
  getHealthStatus(): string {
    return 'The application is up and running!';
  }
}
