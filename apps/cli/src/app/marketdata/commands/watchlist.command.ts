
import { Command, CommandRunner } from 'nest-commander';
import { WatchlistNewCommand } from './watchlist-new.command';
import { WatchlistViewCommand } from './watchlist-view.command';
import { WatchlistAddCommand } from './watchlist-add.command';
import { WatchlistRemoveCommand } from './watchlist-remove.command';
import { WatchlistListCommand } from './watchlist-list.command';
import { WatchlistDeleteCommand } from './watchlist-delete.command';

@Command({
  name: 'watchlist',
  aliases: ['w'],
  description: 'manage watchlist',
  subCommands: [
    WatchlistListCommand,
    WatchlistNewCommand,
    WatchlistViewCommand,
    WatchlistAddCommand,
    WatchlistRemoveCommand,
    WatchlistDeleteCommand,
  ],
})
export class WatchlistCommand extends CommandRunner {
  async run(): Promise<void> {
    this.command.outputHelp();
  }
}
