import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembreService } from './membre.service';
import { Membre } from './membre.entity';
import { MembreController } from './membre.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Membre])],
  exports: [TypeOrmModule],
  controllers: [MembreController],
  providers: [MembreService],
})
export class MembreModule {}
