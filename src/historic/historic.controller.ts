import { Controller, Get, Param } from '@nestjs/common';

import yahooFinance from 'yahoo-finance2';

@Controller('historic')
export class HistoricController {
  @Get(':id')
  async getHello(@Param() params: any): Promise<any> {
    const query = params.id;
    const queryOptions = { period1: '2014-09-01' };
    const result = await yahooFinance.historical(query, queryOptions);
    return result;
  }
}
