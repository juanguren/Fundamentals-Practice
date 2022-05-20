import { Test, TestingModule } from '@nestjs/testing';
import { DataService } from './data.service';
import { CreateDatumDto } from './dto/create-datum.dto';

describe('DataService', () => {
  let service: DataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataService],
    }).compile();

    service = module.get<DataService>(DataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('Should return an item(s) array', () => {
    const items = ['test'];
    jest.spyOn(service, 'getAllItems').mockImplementation(() => items);
    expect(service.getAllItems()).toBe(items);
  });
  it('Should call the json API', async () => {
    const mockId = '20';
    const mockResponse = JSON.stringify({
      json: {
        completed: false,
        id: mockId,
        title: 'illo expedita consequatur quia in',
        userId: 1,
      },
    });
    jest
      .spyOn(service, 'createOne')
      .mockImplementation(async () => mockResponse);
    expect(await service.createOne(mockId, 'HEY')).toBe(mockResponse);
  });
  it('Should correctly push to the items array', () => {
    const mockItemList = [];
    const mockItem: CreateDatumDto = {
      name: 'Pipe',
      id: '598',
      quantity: 10,
    };

    jest.spyOn(service, 'create').mockImplementation(() => mockItemList);
    mockItemList.push(mockItem);
    expect(service.create(mockItem)).toBe(mockItemList);
  });
});
