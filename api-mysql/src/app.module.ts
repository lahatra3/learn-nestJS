import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembreModule } from './membre/membre.module';
import { ConfigModule } from '@nestjs/config';

import { Autres } from './output/entities/Autres';
import { Competences } from './output/entities/Competences';
import { Distinctions } from './output/entities/Distinctions';
import { Experiences } from './output/entities/Experiences';
import { Fonction } from './output/entities/Fonction';
import { Formations } from './output/entities/Formations';
import { Membre } from './output/entities/Membre';
import { Projets } from './output/entities/Projets';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      name: "default",
      type: "mariadb",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Membre, Fonction, Formations, 
        Competences, Experiences, Distinctions, 
        Projets, Autres],
      synchronize: true
    }),
    MembreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
