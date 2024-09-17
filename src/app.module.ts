import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoricController } from './historic/historic.controller';

@Module({
  imports: [],
  controllers: [AppController, HistoricController],
  providers: [AppService],
})
export class AppModule {}
