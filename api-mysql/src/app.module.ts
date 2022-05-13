import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

import { MembreModule } from './membre/membre.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mariadb",
      host: "localhost",
      port: 3306,
      username: "jitiy",
      password: "01Lah_tr*@ro0t/*",
      database: "ITEAMS",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    MembreModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
