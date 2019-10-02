import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database';

@Module({
    providers: [...DatabaseProvider],
    exports: [...DatabaseProvider],
})
export class DatabaseModule {}
