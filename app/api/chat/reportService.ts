const request = require('request');

export const fetchReport = async (symbol: string): Promise<string> => {
  console.log('symbol ::: ', symbol);
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=P64Q4ZGJ81HSQTCT`;

  return new Promise((resolve, reject) => {
    request.get({
      url: url,
      json: true,
      headers: { 'User-Agent': 'request' }
    }, (err: any, res: any, data: any) => {
      if (err) {
        reject(JSON.stringify({ error: err.message }));
      } else if (res.statusCode !== 200) {
        reject(JSON.stringify({ error: `Status: ${res.statusCode}` }));
      } else {
        console.log(data);
        resolve(JSON.stringify(data));
      }
    });
  });
};

// export const getNewsSentiment = async (symbol : string): Promise<string> => {
//   console.log('symbol ::: ', symbol);
//   const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&apikey=P64Q4ZGJ81HSQTCT`;

//   return new Promise((resolve, reject) => {
//     request.get({
//       url: url,
//       json: true,
//       headers: { 'User-Agent': 'request' }
//     }, (err: any, res: any, data: any) => {
//       if (err) {
//         reject(JSON.stringify({ error: err.message }));
//       } else if (res.statusCode !== 200) {
//         reject(JSON.stringify({ error: `Status: ${res.statusCode}` }));
//       } else {
//         console.log(typeof data);
//         console.log(data);
//         // resolve(JSON.stringify(data));
//         resolve(JSON.stringify(""));
//       }
//     });
//   });
// };


export const getNewsSentiment = async (symbol: string): Promise<string> => {
  console.log('symbol ::: ', symbol);
  const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&apikey=P64Q4ZGJ81HSQTCT`;

  return new Promise((resolve, reject) => {
    request.get({
      url: url,
      json: true,
      headers: { 'User-Agent': 'request' }
    }, (err: any, res: any, data: any) => {
      if (err) {
        reject(JSON.stringify({ error: err.message }));
      } else if (res.statusCode !== 200) {
        reject(JSON.stringify({ error: `Status: ${res.statusCode}` }));
      } else {
        console.log(data);

        // Keep only the top 3 entries from the feed
        const topThreeFeed = data.feed.slice(0, 3);

        // Reconstruct the JSON object
        const modifiedData = {
          items: data.items,
          sentiment_score_definition: data.sentiment_score_definition,
          relevance_score_definition: data.relevance_score_definition,
          feed: topThreeFeed
        };

        resolve(JSON.stringify(modifiedData));
      }
    });
  });
};


export const fetchEarnings = async (symbol: string): Promise<string> => {
  console.log('symbol ::: ', symbol);
  const url = `https://www.alphavantage.co/query?function=EARNINGS&symbol=${symbol}&apikey=P64Q4ZGJ81HSQTCT`;

  return new Promise((resolve, reject) => {
    request.get({
      url: url,
      json: true,
      headers: { 'User-Agent': 'request' }
    }, (err: any, res: any, data: any) => {
      if (err) {
        reject(JSON.stringify({ error: err.message }));
      } else if (res.statusCode !== 200) {
        reject(JSON.stringify({ error: `Status: ${res.statusCode}` }));
      } else {
        console.log(data);
        resolve(JSON.stringify(data));
      }
    });
  });
};