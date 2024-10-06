import { Test, TestingModule } from '@nestjs/testing';
import { InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { getFugleTradeToken } from '@fugle/trade-nest';
import { FugleTrade, Order, OrderPayload } from '@fugle/trade';
import { getLineNotifyToken, LineNotify } from 'nest-line-notify';
import { TraderService } from './trader.service';
import { GetTransactionsDto } from './dto/get-transactions.dto';

describe('TraderService', () => {
  let service: TraderService;
  let fugle: FugleTrade;
  let lineNotify: LineNotify;
  let logger: jest.SpyInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TraderService,
        {
          provide: getFugleTradeToken(),
          useValue: {
            getOrders: jest.fn(),
            placeOrder: jest.fn(),
            replaceOrder: jest.fn(),
            cancelOrder: jest.fn(),
            getTransactions: jest.fn(),
            getInventories: jest.fn(),
            getSettlements: jest.fn(),
            getBalance: jest.fn(),
            streamer: {
              connect: jest.fn(),
              disconnect: jest.fn(),
            },
          },
        },
        {
          provide: getLineNotifyToken(),
          useValue: {
            send: jest.fn(() => Promise.resolve()),
          },
        },
      ],
    }).compile();

    service = module.get<TraderService>(TraderService);
    fugle = module.get<FugleTrade>(getFugleTradeToken());
    lineNotify = module.get<LineNotify>(getLineNotifyToken());
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getOrders', () => {
    it('should return orders payload when getOrders is successful', async () => {
      const mockOrders = [{ payload: { ordNo: '1' } }];
      fugle.getOrders = jest.fn().mockResolvedValue(mockOrders);

      const result = await service.getOrders();
      expect(result).toEqual([{ ordNo: '1' }]);
      expect(fugle.getOrders).toHaveBeenCalled();
    });

    it('should throw InternalServerErrorException when getOrders fails', async () => {
      fugle.getOrders = jest.fn().mockRejectedValue(new Error('some error'));

      await expect(service.getOrders()).rejects.toThrow(InternalServerErrorException);
      expect(fugle.getOrders).toHaveBeenCalled();
    });
  });

  describe('placeOrder', () => {
    it('should place an order successfully', async () => {
      const placeOrderDto = {
        stockNo: '2330',
        buySell: 'B',
        price: 600,
        quantity: 1,
        apCode: '1',
        priceFlag: '0',
        bsFlag: 'R',
        trade: '0',
      };
      fugle.placeOrder = jest.fn().mockResolvedValue({});

      await service.placeOrder(placeOrderDto);
      expect(fugle.placeOrder).toHaveBeenCalledWith(new Order(placeOrderDto as OrderPayload));
    });

    it('should throw InternalServerErrorException when placeOrder fails', async () => {
      const placeOrderDto = {
        stockNo: '2330',
        buySell: 'B',
        price: 600,
        quantity: 1,
        apCode: '1',
        priceFlag: '0',
        bsFlag: 'R',
        trade: '0',
      };
      fugle.placeOrder = jest.fn().mockRejectedValue(new Error('some error'));

      await expect(service.placeOrder(placeOrderDto)).rejects.toThrow(InternalServerErrorException);
      expect(fugle.placeOrder).toHaveBeenCalledWith(new Order(placeOrderDto as OrderPayload));
    });
  });

  describe('replaceOrder', () => {
    it('should replace an existing order successfully', async () => {
      const replaceOrderDto = {
        price: 500,
      };
      const mockOrders = [{ payload: { ordNo: '1' } }];
      fugle.getOrders = jest.fn().mockResolvedValue(mockOrders);
      fugle.replaceOrder = jest.fn().mockResolvedValue({});

      await service.replaceOrder('1', replaceOrderDto);
      expect(fugle.replaceOrder).toHaveBeenCalledWith(mockOrders[0], replaceOrderDto);
    });

    it('should throw NotFoundException when replaceOrder cannot find the order', async () => {
      const replaceOrderDto = {
        price: 500,
      };
      fugle.getOrders = jest.fn().mockResolvedValue([]);

      await expect(service.replaceOrder('1', replaceOrderDto)).rejects.toThrow(NotFoundException);
    });


    it('should throw InternalServerErrorException when replaceOrder fails', async () => {
      const replaceOrderDto = {
        price: 500,
      };
      const mockOrders = [{ payload: { ordNo: '1' } }];
      fugle.getOrders = jest.fn().mockResolvedValue(mockOrders);
      fugle.replaceOrder = jest.fn().mockRejectedValue(new Error('some error'));

      await expect(service.replaceOrder('1', replaceOrderDto)).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('cancelOrder', () => {
    it('should cancel an existing order successfully', async () => {
      const mockOrders = [{ payload: { ordNo: '1' } }];
      fugle.getOrders = jest.fn().mockResolvedValue(mockOrders);
      fugle.cancelOrder = jest.fn().mockResolvedValue({});

      await service.cancelOrder('1');
      expect(fugle.cancelOrder).toHaveBeenCalledWith(mockOrders[0]);
    });

    it('should throw NotFoundException when cancelOrder cannot find the order', async () => {
      fugle.getOrders = jest.fn().mockResolvedValue([]);

      await expect(service.cancelOrder('1')).rejects.toThrow(NotFoundException);
    });

    it('should throw InternalServerErrorException when cancelOrder fails', async () => {
      const mockOrders = [{ payload: { ordNo: '1' } }];
      fugle.getOrders = jest.fn().mockResolvedValue(mockOrders);
      fugle.cancelOrder = jest.fn().mockRejectedValue(new Error('some error'));

      await expect(service.cancelOrder('1')).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('getTransactions', () => {
    it('should get transactions successfully', async () => {
      const getTransactionsDto: GetTransactionsDto = { duration: '0d' };
      fugle.getTransactions = jest.fn().mockResolvedValue([]);

      const result = await service.getTransactions(getTransactionsDto);
      expect(result).toEqual([]);
      expect(fugle.getTransactions).toHaveBeenCalledWith(getTransactionsDto);
    });

    it('should throw InternalServerErrorException when getTransactions fails', async () => {
      const getTransactionsDto: GetTransactionsDto  = { duration: '0d' };
      fugle.getTransactions = jest.fn().mockRejectedValue(new Error('some error'));

      await expect(service.getTransactions(getTransactionsDto)).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('getInventories', () => {
    it('should get inventories successfully', async () => {
      fugle.getInventories = jest.fn().mockResolvedValue([]);

      const result = await service.getInventories();
      expect(result).toEqual([]);
      expect(fugle.getInventories).toHaveBeenCalled();
    });

    it('should throw InternalServerErrorException when getInventories fails', async () => {
      fugle.getInventories = jest.fn().mockRejectedValue(new Error('some error'));

      await expect(service.getInventories()).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('getSettlements', () => {
    it('should get incoming settlements successfully', async () => {
      fugle.getSettlements= jest.fn().mockResolvedValue([]);

      const result = await service.getSettlements();
      expect(result).toEqual([]);
      expect(fugle.getSettlements).toHaveBeenCalled();
    });

    it('should throw InternalServerErrorException when getSettlements fails', async () => {
      fugle.getSettlements = jest.fn().mockRejectedValue(new Error('some error'));

      await expect(service.getSettlements()).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('getBalance', () => {
    it('should get bank account balance successfully', async () => {
      fugle.getBalance= jest.fn().mockResolvedValue({});

      const result = await service.getBalance();
      expect(result).toEqual({});
      expect(fugle.getBalance).toHaveBeenCalled();
    });

    it('should throw InternalServerErrorException when getBalance fails', async () => {
      fugle.getBalance = jest.fn().mockRejectedValue(new Error('some error'));

      await expect(service.getBalance()).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('onConnect', () => {
    it('should log on connect', async () => {
      logger = jest.spyOn(Logger.prototype, 'log').mockImplementation();

      await service.onConnect();
      expect(logger).toHaveBeenCalledWith('Streamer.onConnect');
    });
  });

  describe('onDisconnect', () => {
    it('should log on disconnect and reconnect streamer', async () => {
      logger = jest.spyOn(Logger.prototype, 'log').mockImplementation();

      await service.onDisconnect();
      expect(logger).toHaveBeenCalledWith('Streamer.onDisconnect');
      expect(fugle.streamer.connect).toHaveBeenCalled();
    });
  });

  describe('onOrder', () => {
    it('should handle onOrder and send Line Notify message if enabled', async () => {
      logger = jest.spyOn(Logger.prototype, 'log').mockImplementation();
      process.env.LINE_NOTIFY_ENABLED = 'true';
      const mockOrderData = {};

      await service.onOrder(mockOrderData);
      expect(lineNotify.send).toHaveBeenCalled();
      expect(logger).toHaveBeenCalledWith(expect.stringContaining('<<委託回報>>'));
    });

    it('should log onOrder without Line Notify message if not enabled', async () => {
      logger = jest.spyOn(Logger.prototype, 'log').mockImplementation();
      process.env.LINE_NOTIFY_ENABLED = 'false';
      const mockOrderData = {};

      await service.onOrder(mockOrderData);
      expect(lineNotify.send).not.toHaveBeenCalled();
      expect(logger).toHaveBeenCalledWith(expect.stringContaining('<<委託回報>>'));
    });

    it('should log error when send LineNotify message fails', async () => {
      logger = jest.spyOn(Logger.prototype, 'error').mockImplementation();
      const mockError = new Error('some error');
      lineNotify.send = jest.fn().mockRejectedValue(mockError);
      process.env.LINE_NOTIFY_ENABLED = 'true';
      const mockOrderData = {};

      await service.onOrder(mockOrderData);
      expect(lineNotify.send).toHaveBeenCalled();
      expect(logger).toHaveBeenCalledWith(mockError.message, mockError.stack);
    });
  });

  describe('OnTrade', () => {
    it('should log trade details and send message to LineNotify', async () => {
      logger = jest.spyOn(Logger.prototype, 'log').mockImplementation();
      process.env.LINE_NOTIFY_ENABLED = 'true';
      const mockTradeData = {};

      await service.onTrade(mockTradeData);
      expect(lineNotify.send).toHaveBeenCalled();
      expect(logger).toHaveBeenCalledWith(expect.stringContaining('<<成交回報>>'));
    });

    it('should log onTrade without Line Notify message if not enabled', async () => {
      logger = jest.spyOn(Logger.prototype, 'log').mockImplementation();
      process.env.LINE_NOTIFY_ENABLED = 'false';
      const mockTradeData = {};

      await service.onTrade(mockTradeData);
      expect(lineNotify.send).not.toHaveBeenCalled();
      expect(logger).toHaveBeenCalledWith(expect.stringContaining('<<成交回報>>'));
    });

    it('should log error when send LineNotify message fails', async () => {
      logger = jest.spyOn(Logger.prototype, 'error').mockImplementation();
      const mockError = new Error('some error');
      lineNotify.send = jest.fn().mockRejectedValue(mockError);
      process.env.LINE_NOTIFY_ENABLED = 'true';
      const mockTradeData = {};

      await service.onTrade(mockTradeData);
      expect(lineNotify.send).toHaveBeenCalled();
      expect(logger).toHaveBeenCalledWith(mockError.message, mockError.stack);
    });
  });

  describe('onError', () => {
    it('should log error and disconnect streamer', async () => {
      logger = jest.spyOn(Logger.prototype, 'error').mockImplementation();
      const mockError = new Error('some error');

      await service.onError(mockError);
      expect(logger).toHaveBeenCalledWith(mockError.message, mockError.stack);
      expect(fugle.streamer.disconnect).toHaveBeenCalled();
    });
  });
});
