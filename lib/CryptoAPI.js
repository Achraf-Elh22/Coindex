const axios = require('axios');
const color = require('colors');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  }

  async getPriceDate(coinOption, curOption) {
    try {
      // Format Price
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curOption,
      });
      const res = await axios(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`
      );

      let output = '';

      res.data.forEach(
        (coin) =>
          (output += `Coin: ${coin.symbol.yellow} (${coin.name}) | price: ${
            formatter.format(coin.price).green
          } | Rank: ${coin.rank.blue}\n`)
      );
      return output;
    } catch (err) {
      handleAPIError(err);
    }
  }
}

function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error('Your API key is invalid - Go to https://nomics.com');
  } else if (err.response.status === 404) {
    throw new Error('Your API is not responding');
  } else {
    throw new Error('Something is not working');
  }
}

module.exports = CryptoAPI;
