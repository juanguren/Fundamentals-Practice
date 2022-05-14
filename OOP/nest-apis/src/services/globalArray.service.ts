import { CreateRecordDTO, GetRecordDTO } from './globalArray-types';
import axios from 'axios';

const { GLOBAL_ARRAY_KEY, GLOBAL_ARRAY_BASE_URL } = process.env;

class GlobalArray {
  private token: string = process.env.GLOBAL_ARRAY_KEY;
  private baseUrl: string = GLOBAL_ARRAY_BASE_URL;

  constructor() {}

  async createRecord(body: CreateRecordDTO): Promise<number> {
    try {
      const request = await axios.post(this.baseUrl, body, {
        headers: { api_key: this.token },
      });
      const response = request.data;

      return response?.status || 200;
    } catch (error) {
      return error;
    }
  }

  async getRecord(keyName: string): Promise<GetRecordDTO> {}

  async updateRecord(body: CreateRecordDTO): Promise<number> {}

  async deleteRecord(keyName: string): Promise<{ message: string }> {}
}

export default new GlobalArray();
