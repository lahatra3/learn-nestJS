import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembreService } from './membre.service';
import { MembreController } from './membre.controller';
import { Membre } from 'src/output/entities/Membre';

@Module({
  imports: [TypeOrmModule.forFeature([Membre])],
  exports: [TypeOrmModule],
  controllers: [MembreController],
  providers: [MembreService],
})
export class MembreModule { }
