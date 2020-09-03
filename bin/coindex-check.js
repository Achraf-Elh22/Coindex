const program = require('commander');
const check = require('../commands/check');

program
  .command('price')
  .description('Check the price of the coin')
  .option(
    '--coin <type>',
    'Add a specific coin type in CSV format',
    'BTC,ETH,XRP'
  )
  .option('--cur <currency>', 'Change the currency', 'USD')
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
