const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');
const color = require('colors');

const check = {
  async price(cmd) {
    try {
      const keymanager = new KeyManager();
      const apiKey = keymanager.showKey('apiKey');

      const cryptoAPI = new CryptoAPI(apiKey);

      const output = await cryptoAPI.getPriceDate(cmd.coin, cmd.cur);
      console.log(output);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = check;
