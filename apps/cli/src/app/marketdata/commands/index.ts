import { QuoteCommand } from './quote.command';
import { WatchlistCommand } from './watchlist.command';
import { WatchlistNewCommand } from './watchlist-new.command';
import { WatchlistViewCommand } from './watchlist-view.command';
import { WatchlistAddCommand } from './watchlist-add.command';
import { WatchlistRemoveCommand } from './watchlist-remove.command';
import { WatchlistListCommand } from './watchlist-list.command';
import { WatchlistDeleteCommand } from './watchlist-delete.command';

export const Commands = [
  QuoteCommand,
  WatchlistCommand,
  WatchlistListCommand,
  WatchlistNewCommand,
  WatchlistViewCommand,
  WatchlistAddCommand,
  WatchlistRemoveCommand,
  WatchlistDeleteCommand,
];
