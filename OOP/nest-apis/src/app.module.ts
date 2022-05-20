import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './app.controller';
import { UserService } from './app.service';
import { DataModule } from './data/data.module';
import { AppLoggerMiddleware } from './logger.middleware';

@Module({
  imports: [DataModule, ConfigModule.forRoot()], // ConfigModule loads and parses a .env file from the project root directory
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
