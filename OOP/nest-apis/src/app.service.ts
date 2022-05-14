import { Injectable } from '@nestjs/common';

const toJSON = (value: any) => JSON.stringify(value);

@Injectable()
export class UserService {
  getHello(): string {
    return 'HEY!';
  }
  getMoreData(id: string): any {
    return toJSON({
      data: 'HEY',
      id,
    });
  }
}
