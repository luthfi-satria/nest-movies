import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsController } from './actors.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Actors } from './entities/actor.entity';

@Module({
  imports: [Actors],
  controllers: [ActorsController],
  providers: [ActorsService],
})
export class ActorsModule {}
