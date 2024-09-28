import { BalanceCommand } from './balance.command';
import { PlaceCommand } from './place.command';
import { ReplaceOrderCommand } from './replace.command';
import { CancelCommand } from './cancel.command';
import { OrdersCommand } from './orders.command';
import { TransactionsCommand } from './transactions.command';
import { InventoriesCommand } from './inventories.command';
import { SettlementsCommand } from './settlements.command';

export const Commands = [
  PlaceCommand,
  ReplaceOrderCommand,
  CancelCommand,
  OrdersCommand,
  TransactionsCommand,
  InventoriesCommand,
  SettlementsCommand,
  BalanceCommand,
];
