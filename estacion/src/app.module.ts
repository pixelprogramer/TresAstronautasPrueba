import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PlanetasController} from "./planetas.controller";

@Module({
  imports: [],
  controllers: [AppController, PlanetasController],
  providers: [AppService],
})
export class AppModule {}
