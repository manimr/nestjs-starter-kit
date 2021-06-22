import { Injectable } from '@nestjs/common';
import databaseFactory from './config/database/postgres.config';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  async getHello(): Promise<any[]> {
    const res = await databaseFactory(this.configService).query(
      `SELECT * FROM public.customer ORDER BY customer_id ASC LIMIT 10`,
    );
    return res.rows;
  }
}
