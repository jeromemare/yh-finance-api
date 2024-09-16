import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

import yahooFinance from 'yahoo-finance2';

@Controller('search')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  async getHello(@Param() params: any): Promise<any> {
    const query = params.id;
    const result = await yahooFinance.search(query /* queryOptions */);
    return result;
  }
}
