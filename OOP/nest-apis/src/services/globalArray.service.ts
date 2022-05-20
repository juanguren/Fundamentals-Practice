import {
  CreatedRecordDTO,
  CreateRecordDTO,
  GetRecordDTO,
} from './globalArray-types';
import axios from 'axios';

const { GLOBAL_ARRAY_KEY, GLOBAL_ARRAY_BASE_URL } = process.env;

class GlobalArray {
  private token: string = GLOBAL_ARRAY_KEY;
  private baseUrl: string = GLOBAL_ARRAY_BASE_URL;

  constructor() {}

  async createRecord(body: CreateRecordDTO): Promise<CreatedRecordDTO> {
    try {
      const instance = (await this.getInstance()).post('/', body);
      const response = (await instance).data;

      return response;
    } catch (error) {
      return error;
    }
  }

  async getRecord(keyName: string): Promise<GetRecordDTO> {
    try {
      const instance = (await this.getInstance()).get(`/${keyName}`);
      const response = (await instance).data;

      return response;
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
