import { Test, TestingModule } from '@nestjs/testing';
import { MarketDataController } from './marketdata.controller';
import { MarketDataService } from './marketdata.service';

describe('MarketDataController', () => {
  let controller: MarketDataController;
  let service: MarketDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketDataController],
      providers: [
        {
          provide: MarketDataService,
          useValue: {
            getQuote: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<MarketDataController>(MarketDataController);
    service = module.get<MarketDataService>(MarketDataService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get quote', () => {
    controller.getQuote('2330').then(() => {
      expect(service.getQuote).toHaveBeenCalled();
    });
  });
});
