import { Test, TestingModule } from '@nestjs/testing';
import { TraderController } from './trader.controller';
import { TraderService } from './trader.service';

describe('TraderController', () => {
  let controller: TraderController;
  let service: TraderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraderController],
      providers: [
        {
          provide: TraderService,
          useValue: {
            getOrders: jest.fn(),
            placeOrder: jest.fn(),
            replaceOrder: jest.fn(),
            cancelOrder: jest.fn(),
            getTransactions: jest.fn(),
            getInventories: jest.fn(),
            getSettlements: jest.fn(),
            getBalance: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TraderController>(TraderController);
    service = module.get<TraderService>(TraderService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get existing orders', () => {
    controller.getOrders().then(() => {
      expect(service.getOrders).toHaveBeenCalled();
    });
  });

  it('should place an order', async () => {
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
    controller.placeOrder(placeOrderDto).then(() => {
      expect(service.placeOrder).toHaveBeenCalledWith(placeOrderDto);
    });
  });

  it('replace a working order', () => {
    const replaceOrderDto = {
      price: 500,
    };
    controller.replaceOrder('1', replaceOrderDto).then(() => {
      expect(service.replaceOrder).toHaveBeenCalledWith('1', replaceOrderDto);
    });
  });

  it('cancel a working order', () => {
    controller.cancelOrder('1').then(() => {
      expect(service.cancelOrder).toHaveBeenCalledWith('1');
    });
  });

  it('get transactions', () => {
    controller.getTransactions({ duration: '0d' }).then(() => {
      expect(service.getTransactions).toHaveBeenCalledWith({ duration: '0d' });
    });
  });

  it('get inventories', () => {
    controller.getInventories().then(() => {
      expect(service.getInventories).toHaveBeenCalled();
    });
  });

  it('get incoming settlements', () => {
    controller.getSettlements().then(() => {
      expect(service.getSettlements).toHaveBeenCalled();
    });
  });

  it('get bank account balance', () => {
    controller.getBalance().then(() => {
      expect(service.getBalance).toHaveBeenCalled();
    });
  });
});
