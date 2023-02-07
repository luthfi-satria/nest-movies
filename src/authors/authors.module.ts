import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { Authors } from './entities/author.entity';

@Module({
  imports: [Authors],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
