import { Injectable } from '@nestjs/common';
import { CreateDatumDto } from './dto/create-datum.dto';
import globalArrayService from 'src/services/globalArray.service';

import axios from 'axios';

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

  async createOne(id: string, query) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );
      const newItem = response.data;
      newItem.extra = query;
      this.items.push(newItem);

      const { id: itemId } = newItem;
      return { message: `Data was found and saved with ID of ${itemId}` };
    } catch (error) {
      const { status, statusText } = error.response;
      return { message: statusText, status };
    }
  }

  async createMany(amount: number) {
    const { GLOBAL_ARRAY_KEY } = process.env;
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
      this.items.push(...itemData);

      console.log(GLOBAL_ARRAY_KEY);

      return this.items;
    } catch (error) {
      return error;
    }
  }

  getAllItems(): Array<any> {
    return this.items;
  }
}
