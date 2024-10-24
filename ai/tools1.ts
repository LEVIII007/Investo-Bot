import { tool as createTool } from 'ai';
import { z } from 'zod';
const { tavily } = require("@tavily/core");
import { getNewsSentiment, fetchReport, fetchEarnings } from '../app/api/chat/reportService';
const yahooFinance = require('yahoo-finance2').default;

const tvly = tavily({ apiKey: "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" });

export const finalAnswer = createTool({
  description: 'This tool is used to provide the very detailed and explainatory final answer to the user. input to this function must be in markdown format.',
  parameters: z.object({ answer: z.string() }),
  execute: async ({ answer }: { answer: string }) => {
    console.log("final answer", answer);
    return answer;
  },
});

export const searchInformationOnGoogle = createTool({
    description: 'Search for information on Google.',
    parameters: z.object({ searchQuery: z.string() }),
    execute: async ({ searchQuery }: { searchQuery: string }) => {
      console.log("searchQuery", searchQuery);
      const answer = await tvly.searchQNA(searchQuery);
      console.log("response", answer);
      return JSON.stringify(answer);
    },
  });


export const getFinancialStockReport = createTool({
  description: 'This tool shows the financial report of a given stock. Use this to show the financial report to the user.',
  parameters: z.object({
    symbol: z.string().describe('The name or symbol of the stock or currency. e.g. DOGE/AAPL/USD.')
  }),
  execute: async ({ symbol }: { symbol: string }): Promise<string> => {
    try {
      console.log('get financial report called!!!!', symbol);
      const result = await fetchReport(symbol);
      return result;
    } catch (error: any) {
      return JSON.stringify({ error: error.message });
    }
  }
});

export const getNewsSentimentTool = createTool({
  description: 'This tool shows the latest news sentiment for a given stock. Use this to show the news sentiment to the user.',
  parameters: z.object({
    symbol: z.string().describe('The name or symbol of the stock or currency. e.g. DOGE/AAPL/USD.')
  }),
  execute: async ({ symbol }: { symbol: string }): Promise<string> => {
    try {
      console.log('get news sentiment called!!!!', symbol);
      const result = await getNewsSentiment(symbol);
      console.log('result', result);
      return JSON.stringify(result);
    } catch (error: any) {
      return JSON.stringify({ error: error.message });
    }
  }
});

export const getStockNews = createTool({
  description: 'This tool lists the latest news related to a given stock. Use this to list the summary of news to the user.',
  parameters: z.object({
    symbol: z.string().describe('The name or symbol of the stock or currency. e.g. DOGE/AAPL/USD.')
  }),
  execute: async ({ symbol }: { symbol: string }): Promise<string> => {
    try {
      console.log('get stock price called!!!!', symbol);
      const result = await yahooFinance.search(symbol);
      console.log('result', result);
      return JSON.stringify(result.news.slice(0, 5));
    } catch (error: any) {
      return JSON.stringify({ error: error.message });
    }
  }
});

export const getCompanyEarningsTool = createTool({
  description: 'This tool shows the earnings of a given company. Use this to show the earnings to the user.',
  parameters: z.object({
    symbol: z.string().describe('The name or symbol of the stock or currency. e.g. DOGE/AAPL/USD.')
  }),
  execute: async ({ symbol }: { symbol: string }): Promise<string> => {
    try {
      console.log('get company earnings called!!!!', symbol);
      const result = await fetchEarnings(symbol);
      
      // Parse the result and get the first 3 entries in annualEarnings
      const parsedResult = JSON.parse(result);
      const firstThreeAnnualEarnings = parsedResult.annualEarnings.slice(0, 3);
      console.log('firstThreeAnnualEarnings', firstThreeAnnualEarnings);
      
      // Create a new object with the sliced annualEarnings
      const modifiedResult = {
        ...parsedResult,
        annualEarnings: firstThreeAnnualEarnings
      };
      
      return JSON.stringify(modifiedResult);
    } catch (error: any) {
      return JSON.stringify({ error: error.message });
    }
    }
    });
export const getSymbolofCompany = createTool({
    description: 'This tool shows the symbol of a given company. Use this to show the symbol to the user.',
    parameters: z.object({
      companyName: z
        .string()
        .describe('The name of the company. e.g. Apple/Microsoft/Google.')
    }),
    execute: async ({ companyName }: { companyName: string }): Promise<string> => {
      try {
        console.log('get symbol of company called!!!!', companyName);
        const answer = await tvly.searchQNA(`What is the stock symbol of ${companyName}?`);
        console.log("response", answer);
        return answer;
      } catch (error: any) {
        return JSON.stringify({ error: error.message });
      }
    }
  });

export const tools1 = {
    finalAnswer,
    searchInformationOnGoogle,
    getFinancialStockReport,
    getNewsSentimentTool,
    getStockNews,
    getCompanyEarningsTool,
    getSymbolofCompany
}