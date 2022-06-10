import { BadRequestException, Injectable } from '@nestjs/common';
import globalArrayService  from 'src/services/globalArray.service';

import axios from 'axios';
import { CreateRecordDTO, GetRecordDTO } from 'src/services/globalArray-types';
import { returnRecordObject } from 'src/utils/util';

@Injectable()
export class DataService {
  constructor() {}
  async createOne(id: string, keyName: string) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );
      const newItem = response.data;

      const shouldOverwrite = false;
      const dataObject = returnRecordObject(newItem, keyName, shouldOverwrite);
      const recordResponse = await globalArrayService.createRecord(dataObject);
      recordResponse.object = dataObject;

      return recordResponse;
    } catch (error) {
      const { status, statusText } = error.response;
      return { message: statusText, status, error };
    }
  }

  async createMany(amount: number) {
    try {
      const requests = [];
      const itemData = [];
      for (let i = 1; i <= amount; i++) {
        const request = axios.get(
          `https://jsonplaceholder.typicode.com/todos/${i}`,
        );
        requests.push(request);
      }
      const resolved = await Promise.all(requests);
      resolved.forEach((item) => itemData.push(item.data));

      const shouldOverwrite = false;
      const dataObject = returnRecordObject(
        itemData,
        'key_test_many2',
        shouldOverwrite,
      );

      const recordResponse = (await globalArrayService.createRecord(
        dataObject,
      )) as CreateRecordDTO | any;

      if (recordResponse.isAxiosError) {
        const message = recordResponse.response.data;
        throw new BadRequestException(message);
      }

      return recordResponse;
    } catch (error) {
      return error;
    }
  }

  async getOneItem(keyName: string): Promise<GetRecordDTO> {
    return globalArrayService.getRecord(keyName);
  }

  async updateOneItem(keyName: string, id: string) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );
      const newItem = response.data as object;

      const shouldOverwrite = true;
      const dataObject = returnRecordObject(newItem, keyName, shouldOverwrite);

      return globalArrayService.updateRecord(dataObject);
    } catch (error) {}
  }

  async deleteOneItem(keyName: string) {
    return globalArrayService.deleteRecord(keyName);
  }
}
