import { Controller, Get } from '@nestjs/common';

@Controller("report/income")
export class AppController { 
  @Get()
  geAllIncomeReports() {
    return [];
  }

  @Get(':id')
  getIncomeReportById() {
    return {};
  }
}
