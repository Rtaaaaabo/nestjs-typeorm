import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DatabaseProvider } from './database/database';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
  // providers: [...DatabaseProvider],
  // exports: [...DatabaseProvider],
})
export class AppModule {}
