import { ConfigService } from "@nestjs/config";
import databaseFactory from './postgres.config';

const DatabaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: databaseFactory,
  },
];

export default DatabaseProvider;