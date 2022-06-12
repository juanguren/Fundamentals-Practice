import { HttpException } from '@nestjs/common';
import { RedisClientType } from '@redis/client';
import { createClient } from 'redis';
import { RedisDataDTO } from './cache-types';

class CacheService {
  client: RedisClientType;
  constructor() {
    this.client = createClient();
    this.client.connect();
    this.client.on('error', (err) => console.log('Redis Client Error', err));
  }

  async setData(cacheData: RedisDataDTO) {
    const { key, value } = cacheData;
    try {
      const cached = await this.getData(key);
      if (cached) return cached;

      return this.client.set(key, JSON.stringify(value));
    } catch (error) {
      throw new HttpException(error, error.status || 500);
    }
  }

  async getData(key: string) {
    try {
      const response = await this.client.get(key);
      return JSON.parse(response);
    } catch (error) {
      throw new HttpException(error, error.status || 500);
    }
  }

  async cacheManager(key: string, value: any) {}
}

export default new CacheService();
