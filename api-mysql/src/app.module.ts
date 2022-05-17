import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembreModule } from './membre/membre.module';

import { Competences } from './output/entities/Competences';
import { Distinctions } from './output/entities/Distinctions';
import { Experiences } from './output/entities/Experiences';
import { Fonction } from './output/entities/Fonction';
import { Formations } from './output/entities/Formations';
import { Membre } from './output/entities/Membre';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "default",
      type: "mariadb",
      host: "localhost",
      port: 3306,
      username: "",
      password: "",
      database: "",
      entities: [Membre, Fonction, Formations, Competences, Experiences, Distinctions],
      synchronize: true
    }),
    MembreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
