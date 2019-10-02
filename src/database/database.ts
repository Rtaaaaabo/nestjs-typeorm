// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class Database {}

import {createConnection} from 'typeorm';

export const DatabaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];
