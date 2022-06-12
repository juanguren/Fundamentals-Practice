import {
  CreatedRecordDTO,
  CreateRecordDTO,
  GetRecordDTO,
} from './globalArray-types';
import cacheService from '../cache/redis.config';
import axios from 'axios';
import { RedisDataDTO } from 'src/cache/cache-types';

const { GLOBAL_ARRAY_KEY, GLOBAL_ARRAY_BASE_URL } = process.env;

class GlobalArray {
  private token: string;
  private baseUrl: string;

  constructor() {
    if (!GLOBAL_ARRAY_KEY) {
      console.error('GLOBAL_ARRAY_KEY is not set');
    }
    this.token = GLOBAL_ARRAY_KEY;
    this.baseUrl = GLOBAL_ARRAY_BASE_URL;
  }

  async createRecord(body: CreateRecordDTO): Promise<CreatedRecordDTO> {
    try {
      const instance = (await this.getInstance()).post('/', body);
      const storageResponse = (await instance).data as CreatedRecordDTO;

      if (storageResponse) {
        const { keyName: key, record: value } = storageResponse;
        const cacheObject: RedisDataDTO = {
          key,
          value,
        };
        await cacheService.setData(cacheObject);
      }
      // ! TODO: Change globalArray's baseUrl to reflect latest changes in json's respone (or promote to all)
      return storageResponse;
    } catch (error) {
      return error;
    }
  }

  async getRecord(keyName: string): Promise<GetRecordDTO> {
    try {
      const cachedData = await cacheService.getData(keyName);
      if (cachedData) return cachedData;

      const instance = (await this.getInstance()).get(`/${keyName}`);
      const storageResponse = (await instance).data;

      return storageResponse;
    } catch (error) {
      return error;
    }
  }

  async updateRecord(item: object): Promise<object> {
    const instance = (await this.getInstance()).post('/', item);
    const response = (await instance).data;

    return response;
  }

  async deleteRecord(keyName: string): Promise<object> {
    try {
      const instance = (await this.getInstance()).delete(`/${keyName}`);
      const response = (await instance).data;

      return response;
    } catch (error) {
      return error;
    }
  }

  private async getInstance() {
    return axios.create({
      baseURL: this.baseUrl,
      timeout: 10000,
      headers: { api_key: this.token },
    });
  }
}

export default new GlobalArray();
