const configStore = require('configstore');
const pkg = require('../package.json');

class keyManager {
  constructor() {
    this.conf = new configStore(pkg.name);
  }

  setKey(key) {
    this.conf.set({ apiKey: key });
    return key;
  }

  showKey() {
    const apiKey = this.conf.get('apiKey');
    if (!apiKey) {
      throw new Error('No Api Key Found -- Get key at https://nomics.com');
    }

    return apiKey;
  }

  RemoveKey() {
    const apiKey = this.conf.get('apiKey');
    if (!apiKey) {
      throw new Error('No Api Key Found -- Get key at https://nomics.com');
    }
    this.conf.delete('apiKey');
    return;
  }
}

module.exports = keyManager;
