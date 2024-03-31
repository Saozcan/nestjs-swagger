import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwaggerService } from './swagger.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SwaggerService],
})
export class AppModule {}
