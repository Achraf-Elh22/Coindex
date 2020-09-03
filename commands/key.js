const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
const color = require('colors');
const { isRequired } = require('../utils/validation');

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message: 'Enter API Key '.green + 'https://nomics.com',
        validate: isRequired,
      },
    ]);
    const key = keyManager.setKey(input.key);

    if (key) {
      console.log('API Key Set'.blue);
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();

      const key = keyManager.showKey('apikey');
      console.log('Current API Key', key.green);
      return key;
    } catch (err) {
      console.error(err.message.red);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.RemoveKey();

      console.log('Key Removed'.blue);
    } catch (err) {
      console.error(err.message.error);
    }
  },
};

module.exports = key;
