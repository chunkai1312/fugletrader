import { Test, TestingModule } from '@nestjs/testing';
import { getRestClientToken } from '@fugle/marketdata-nest';
import { RestClient } from '@fugle/marketdata';
import { MarketDataService } from './marketdata.service';
import { InternalServerErrorException } from '@nestjs/common';

describe('MarketDataService', () => {
  let service: MarketDataService;
  let restClient: RestClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MarketDataService,
        {
          provide: getRestClientToken(),
          useValue: { stock: { intraday: { quote: jest.fn().mockResolvedValue(Promise.resolve({})) } } },
        },
      ],
    }).compile();

    service = module.get<MarketDataService>(MarketDataService);
    restClient = module.get<RestClient>(getRestClientToken());
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return quote when the API call is successful', async () => {
    const symbol = '2330';
    const mockQuote = {
      date: '2024-10-04',
      type: 'EQUITY',
      exchange: 'TWS',
      market: 'TSE',
      symbol: '2330',
      name: '台積電',
      referencePrice: 972,
      previousClose: 972,
      openPrice: 986,
      openTime: 1728003601084528,
      highPrice: 986,
      highTime: 1728003601084528,
      lowPrice: 967,
      lowTime: 1728018174966930,
      closePrice: 977,
      closeTime: 1728019800000000,
      avgPrice: 979.16,
      change: 5,
      changePercent: 0.51,
      amplitude: 1.95,
      lastPrice: 977,
      lastSize: 6379,
      bids: [
        { price: 976, size: 2 },
        { price: 975, size: 130 },
        { price: 974, size: 6 },
        { price: 973, size: 99 },
        { price: 972, size: 207 }
      ],
      asks: [
        { price: 977, size: 631 },
        { price: 978, size: 803 },
        { price: 979, size: 501 },
        { price: 980, size: 931 },
        { price: 981, size: 226 },
      ],
      total: {
        tradeValue: 40005744000,
        tradeVolume: 40857,
        tradeVolumeAtBid: 15620,
        tradeVolumeAtAsk: 18881,
        transaction: 8476,
        time: 1728019800000000,
      },
      lastTrade: {
        bid: 976,
        ask: 977,
        price: 977,
        size: 6379,
        time: 1728019800000000,
        serial: 10560572,
      },
      lastTrial: {
        bid: 976,
        ask: 977,
        price: 977,
        size: 6368,
        time: 1728019797123586,
        serial: 10560040,
      },
      isClose: true,
      serial: 10560572,
      lastUpdated: 1728019800000000,
    };
    (restClient.stock.intraday.quote as jest.Mock).mockResolvedValue(mockQuote);

    const result = await service.getQuote(symbol);
    expect(result).toEqual(mockQuote);
    expect(restClient.stock.intraday.quote).toHaveBeenCalledWith({ symbol });
  });

  it('should throw InternalServerErrorException when the API call fails', async () => {
    const symbol = '2330';
    const mockError = new Error('some error');
    (restClient.stock.intraday.quote as jest.Mock).mockRejectedValue(mockError);

    await expect(service.getQuote(symbol)).rejects.toThrow(InternalServerErrorException);
    expect(restClient.stock.intraday.quote).toHaveBeenCalledWith({ symbol });
  });
});
