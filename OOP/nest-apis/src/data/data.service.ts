import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDatumDto } from './dto/create-datum.dto';
import globalArrayService from 'src/services/globalArray.service';

import axios from 'axios';
import { CreateRecordDTO } from 'src/services/globalArray-types';
import { returnRecordObject } from 'src/utils/util';

@Injectable()
export class DataService {
  items = [];

  create(createDatumDto: CreateDatumDto) {
    try {
      this.items.push(createDatumDto);
      return { items: this.items };
    } catch (error) {
      return error;
    }
  }

  async createOne(id: string, keyName: string) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );
      const newItem = response.data;
      this.items.push(newItem);

      const dataObject = returnRecordObject(newItem, keyName);

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

      const dataObject = returnRecordObject(itemData, 'key_test_many2');

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

  getAllItems(): Array<any> {
    return this.items;
  }
}
