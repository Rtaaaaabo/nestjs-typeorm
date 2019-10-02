import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DatabaseProvider } from './database/database';
import { DatabaseModule } from './database/database.module';
import { PhotoService } from './photo/photo.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, PhotoService],
  // providers: [...DatabaseProvider],
  // exports: [...DatabaseProvider],
})
export class AppModule {}
