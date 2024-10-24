// // // import { tool as createTool } from 'ai'
// // // import { z } from 'zod'

// // // export const weatherTool = createTool({
// // //   description: 'Display the weather for a location',
// // //   parameters: z.object({
// // //     location: z.string()
// // //   }),
// // //   execute: async function ({ location }) {
// // //     await new Promise(resolve => setTimeout(resolve, 2000))
// // //     return { weather: 'Sunny', temperature: 75, location }
// // //   }
// // // })
// // // export const stockPrice = createTool({
// // //   description: 'Display the stock price for a symbol',
// // //   parameters: z.object({
// // //     symbol: z.string()
// // //   }),
// // //   execute: async function ({ symbol }) {
// // //     await new Promise(resolve => setTimeout(resolve, 2000))
// // //     return { symbol }
// // //   }
// // // })
// // // export const tools = {
// // //   displayWeather: weatherTool,
// // //   displayStockPrice: stockPrice
// // // }

// // import { tool as createTool } from 'ai'
// // import { z } from 'zod'

// // export const weatherTool = createTool({
// //   description: 'Display the weather for a location',
// //   parameters: z.object({
// //     location: z.string()
// //   }),
// //   execute: async function ({ location }) {
// //     console.log('Weather tool called with location:', location);
// //     await new Promise(resolve => setTimeout(resolve, 2000));
// //     return { weather: 'Sunny', temperature: 75, location };
// //   }
// // })

// // export const stockPrice = createTool({
// //   description: 'Display the stock price for a symbol',
// //   parameters: z.object({
// //     symbol: z.string()
// //   }),
// //   execute: async function ({ symbol }) {
// //     console.log('Stock price tool called with symbol:', symbol);
// //     await new Promise(resolve => setTimeout(resolve, 2000));
// //     return { symbol };
// //   }
// // })

// // export const tools = {
// //   displayWeather: weatherTool,
// //   displayStockPrice: stockPrice
// // }



// import { tool as createTool } from 'ai'
// import { z } from 'zod'

// export const stockPrice = createTool({
//   description: 'Display the stock price for a symbol',
//   parameters: z.object({
//     symbol: z.string()
//   }),
//   execute: async function ({ symbol }) {
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     return { symbol }
//   }
// })
// export const etfHeatmap = createTool({
//   description: 'Display the ETF heatmap',
//   parameters: z.object({
//     symbols: z.array(z.string())
//   }),
//   execute: async function ({ symbols }) {
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     return { symbols }
//   }
// })
// export const marketHeatmap = createTool({
//   description: 'Display the market heatmap',
//   parameters: z.object({
//     symbols: z.array(z.string())
//   }),
//   execute: async function ({ symbols }) {
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     return { symbols }
//   }
// })
// export const marketOverview = createTool({
//   description: 'Display the market overview',
//   parameters: z.object({
//     symbols: z.array(z.string())
//   }),
//   execute: async function ({ symbols }) {
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     return { symbols }
//   }
// })
// export const marketTrending = createTool({
//   description: 'Display the market trending',
//   parameters: z.object({
//     symbols: z.array(z.string())
//   }),
//   execute: async function ({ symbols }) {
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     return { symbols }
//   }
// })
// export const stockChart = createTool({
//   description: 'Display the stock chart for a symbol',
//   parameters: z.object({
//     symbol: z.string()
//   }),
//   execute: async function ({ symbol }) {
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     return { symbol }
//   }
// })
// export const stockNews = createTool({
//   description: 'Display the stock news for a symbol',
//   parameters: z.object({
//     symbol: z.string()
//   }),
//   execute: async function ({ symbol }) {
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     return { symbol }
//   }
// })
// export const stockScreener = createTool({
//   description: 'Display the stock screener',
//   parameters: z.object({
//     symbols: z.array(z.string())
//   }),
//   execute: async function ({ symbols }) {
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     return { symbols }
//   }
// })
// export const tools = {
//   displayStockPrice: stockPrice,
//   displayETFHeatmap: etfHeatmap,
//   displayMarketHeatmap: marketHeatmap,
//   displayMarketOverview: marketOverview,
//   displayMarketTrending: marketTrending,
//   displayStockChart: stockChart,
//   displayStockNews: stockNews,
//   displayStockScreener: stockScreener
// }


import { tool as createTool } from 'ai';
import { z } from 'zod';

/**
 * Tool to retrieve and display the current stock price for a specific stock symbol.
 * 
 * Use this tool when the user wants to know the latest market price of a particular stock.
 * 
 * Example: 
 * - "What is the current stock price for AAPL?"
 */
export const stockPrice = createTool({
  description: 'Fetch and display the current stock price for a given symbol.',
  parameters: z.object({
    symbol: z.string()
  }),
  execute: async function ({ symbol }) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { symbol };
  }
});

/**
 * Tool to generate and display a heatmap of ETF (Exchange Traded Fund) performance based on provided symbols.
 * 
 * Use this tool to provide users with a visual overview of how different ETFs are performing in the market.
 * 
 * Example: 
 * - "Can you show me a heatmap of the top-performing ETFs?"
 */
export const etfHeatmap = createTool({
  description: 'Generate a heatmap showcasing the performance of specified ETFs.',
  parameters: z.object({
    symbols: z.array(z.string())
  }),
  execute: async function ({ symbols }) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { symbols };
  }
});

/**
 * Tool to create and display a comprehensive market heatmap, offering insights into the performance of stocks across various sectors.
 * 
 * Use this tool when users want an overview of stock performance within a specific sector or across the entire market.
 * 
 * Example: 
 * - "Show me the stock market heatmap for technology stocks."
 */
export const marketHeatmap = createTool({
  description: 'Display a market heatmap visualizing stock performance across sectors or specific symbols.',
  parameters: z.object({
    symbols: z.array(z.string())
  }),
  execute: async function ({ symbols }) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { symbols };
  }
});

/**
 * Tool to fetch and display a summary overview of the stock market, based on the given symbols.
 * 
 * Use this tool to provide users with a broad summary of how different sectors or markets are performing.
 * 
 * Example: 
 * - "Give me an overview of the US stock market."
 */
export const marketOverview = createTool({
  description: 'Fetch a summary of market performance for the provided stock symbols.',
  parameters: z.object({
    symbols: z.array(z.string())
  }),
  execute: async function ({ symbols }) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { symbols };
  }
});

/**
 * Tool to display trending stocks or sectors in the market based on given symbols.
 * 
 * Use this tool when users are curious about trending stocks or the most active sectors in the market.
 * 
 * Example: 
 * - "Which stocks are trending in the energy sector?"
 */
export const marketTrending = createTool({
  description: 'Display the trending stocks or sectors in the market based on the provided symbols.',
  parameters: z.object({
    symbols: z.array(z.string())
  }),
  execute: async function ({ symbols }) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { symbols };
  }
});

/**
 * Tool to retrieve and display a stock price chart for a specific stock symbol.
 * 
 * Use this tool when users want to see the historical performance of a particular stock in chart form.
 * 
 * Example: 
 * - "Show me the price chart for Tesla (TSLA)."
 */
export const stockChart = createTool({
  description: 'Generate and display a price chart for the specified stock symbol.',
  parameters: z.object({
    symbol: z.string()
  }),
  execute: async function ({ symbol }) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { symbol };
  }
});

/**
 * Tool to retrieve the latest news related to a specific stock.
 * 
 * Use this tool when users request information on recent news or events affecting a particular stock or company.
 * 
 * Example: 
 * - "What are the latest news updates for Apple (AAPL)?"
 * 
 * Note: This tool should be used in combination with the 'getNews' tool for retrieving detailed news articles.
 */
export const stockNews = createTool({
  description: 'Fetch the latest news related to the specified stock symbol.',
  parameters: z.object({
    symbol: z.string()
  }),
  execute: async function ({ symbol }) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { symbol };
  }
});

/**
 * Tool to perform a stock screening operation based on the provided stock symbols.
 * 
 * Use this tool when the user wants to screen stocks for specific criteria or compare multiple stocks at once.
 * 
 * Example: 
 * - "Screen these stocks for the best dividend yield: AAPL, MSFT, GOOGL."
 */
export const stockScreener = createTool({
  description: 'Screen and compare stocks based on specified criteria, using the provided symbols.',
  parameters: z.object({
    symbols: z.array(z.string())
  }),
  execute: async function ({ symbols }) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { symbols };
  }
});

/**
 * Collection of all available tools for market analysis, stock insights, and financial guidance.
 */
export const tools = {
  displayStockPrice: stockPrice,
  displayETFHeatmap: etfHeatmap,
  displayMarketHeatmap: marketHeatmap,
  displayMarketOverview: marketOverview,
  displayMarketTrending: marketTrending,
  displayStockChart: stockChart,
  displayStockNews: stockNews,
  displayStockScreener: stockScreener
};
