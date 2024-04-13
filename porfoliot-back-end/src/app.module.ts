import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetModule } from './projet/projet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projet } from './projet/entities/projet.entity'; // Assurez-vous que l'import est correct

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'porfoliot',
      entities: [Projet],
      synchronize: true,
      autoLoadEntities: true
    }),
    ProjetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
