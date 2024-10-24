// components/renderTools.tsx
import React from 'react'
import StockPrice from '@/components/tradingview/stock-price'
import { ETFHeatmap } from '@/components/tradingview/etf-heatmap'
import { MarketHeatmap } from '@/components/tradingview/market-heatmap'
import { MarketOverview } from '@/components/tradingview/market-overview'
import { MarketTrending } from '@/components/tradingview/market-trending'
import { StockChart } from '@/components/tradingview/stock-chart'
import { StockFinancials } from '@/components/tradingview/stock-financials'
import { StockNews } from '@/components/tradingview/stock-news'
import { StockScreener } from '@/components/tradingview/stock-screener'
import { TickerTape } from '@/components/tradingview/ticker-tape'
import { Weather } from './weather'

// This function renders components based on tool name and result
export function renderTools(toolInvocation:any, result:any) {
    const { toolName, toolCallId, state } = toolInvocation

  switch (toolName) {
    case 'displayWeather':
      return (
        <div key={toolCallId}>
          <Weather {...result} />
        </div>
      )
    case 'displayStockPrice':
      return (
        <div key={toolCallId}>
          <StockPrice symbol={result.symbol} />
        </div>
      )
    case 'displayETFHeatmap':
      return (
        <div key={toolCallId}>
          <ETFHeatmap />
        </div>
      )
    case 'displayMarketHeatmap':
      return (
        <div key={toolCallId}>
          <MarketHeatmap />
        </div>
      )
    case 'displayMarketOverview':
      return (
        <div key={toolCallId}>
          <MarketOverview />
        </div>
      )
    case 'displayMarketTrending':
      return (
        <div key={toolCallId}>
          <MarketTrending />
        </div>
      )
    case 'displayStockChart':
      return (
        <div key={toolCallId}>
          <StockChart
            symbol={result.symbol}
            comparisonSymbols={result.comparisonSymbols}
          />
        </div>
      )
    case 'displayStockFinancials':
      return (
        <div key={toolCallId}>
          <StockFinancials symbol={result.symbol} />
        </div>
      )
    case 'displayStockNews':
      return (
        <div key={toolCallId}>
          <StockNews symbol={result.symbol} />
        </div>
      )
    case 'displayStockScreener':
      return (
        <div key={toolCallId}>
          <StockScreener />
        </div>
      )
    case 'displayTickerTape':
      return (
        <div key={toolCallId}>
          <TickerTape />
        </div>
      )
    default:
      return null
  }
}
