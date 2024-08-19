import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// TODO: Use .env for the db credentials

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'task-manager-app',
      entities: [__dirname + './**/*.entity.ts'],
      autoLoadEntities: true,
      synchronize: true,
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
