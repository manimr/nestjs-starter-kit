import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
const databaseFactory = (configService: ConfigService): Pool => {
  return new Pool({
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    user: configService.get('DB_USER'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
  });
};
export default databaseFactory;
