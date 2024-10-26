'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ArrowUpCircle, Loader2, StopCircle, RefreshCcw } from 'lucide-react'
import { useChat } from 'ai/react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { StockPrice } from '@/components/tradingview/stock-price'
import { ETFHeatmap } from '@/components/tradingview/etf-heatmap'
import { ResetIcon } from '@radix-ui/react-icons'
import { MarketHeatmap } from '@/components/tradingview/market-heatmap'
import { MarketOverview } from '@/components/tradingview/market-overview'
import { MarketTrending } from '@/components/tradingview/market-trending'
import { StockNews } from '@/components/tradingview/stock-news'
import { StockScreener } from '@/components/tradingview/stock-screener'
import ReactMarkdown from 'react-markdown'
import { TickerTape } from '@/components/tradingview/ticker-tape'

export default function PolishedStockChat() {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [resetChat, setResetChat] = useState(false)

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    reload,
    setInput
  } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: '1',
        role: 'assistant',
        content:
          "Hi! I'm StockBot, your AI assistant for stock market information and analysis. How can I help you today?"
      }
    ]
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const suggestedQueries = [
    {
      title: 'What is the price',
      subtitle: 'of Apple Inc?',
      query:
        'What is the current stock price of Apple Inc and how has it performed today?'
    },
    {
      title: 'Show me a screener',
      subtitle: 'to find new stocks',
      query:
        'Create a stock screener for companies with market cap > $10B, P/E < 20, and positive revenue growth'
    },
    {
      title: "What are Microsoft's",
      subtitle: 'latest financials?',
      query:
        "Show me Microsoft's latest quarterly financial results and key metrics"
    },
    {
      title: 'How is the stock market',
      subtitle: 'performing today by sector?',
      query:
        'Give me an overview of how different market sectors are performing today'
    }
  ]

  const handleSuggestedQuery = (query: string) => {
    setInput(query)
    const formEvent = new Event('submit', { cancelable: true })
    document.querySelector('form')?.dispatchEvent(formEvent)
  }

  const handleResetChat = () => {
    setResetChat(true)
    setTimeout(() => setResetChat(false), 100)
  }

  return (
    <div
      className={cn(
<<<<<<< HEAD
        'flex flex-col justify-start items-start bg-gradient-to-br from-gray-50 to-gray-100 w-full md:px-6 transition-all duration-300 ease-in-out',
=======
        'flex flex-col justify-start items-start bg-gray-50 w-full md:px-6 transition-all duration-300 ease-in-out ',
>>>>>>> 90ecc3937263132b1b3bb2f673c9b36ae630ddb0
        isFullscreen ? 'h-screen' : 'h-[calc(100vh-2rem)]'
      )}
    >
      {/* Main Chat Area */}
<<<<<<< HEAD
      <main className="flex-1 overflow-auto w-full px-4 md:px-0">
=======
      <main className="flex-1 overflow-auto md:w-full px-5">
>>>>>>> 90ecc3937263132b1b3bb2f673c9b36ae630ddb0
        <TickerTape />
        <ScrollArea className="h-full">
          <div className="flex flex-col min-h-full py-6 space-y-6 max-w-4xl mx-auto">
            <AnimatePresence>
              {messages.length <= 1 || resetChat ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center h-full"
                >
                  <h2 className="text-3xl font-semibold mb-4 text-gray-800">
                    Welcome to StockBot
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 text-center">
                    Get real-time stock information and market insights powered
                    by AI
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                    {suggestedQueries.map((query, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto p-4 flex flex-col items-start hover:bg-gray-100 transition-colors duration-200 shadow-sm"
                        onClick={() => handleSuggestedQuery(query.query)}
                      >
                        <span className="font-medium text-lg text-gray-800">
                          {query.title}
                        </span>
                        <span className="text-sm text-gray-500">
                          {query.subtitle}
                        </span>
                      </Button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="w-full space-y-7">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={cn(
                        'flex',
                        message.role === 'user'
                          ? 'justify-end'
                          : 'justify-start'
                      )}
                    >
                      <div
                        className={cn(
                          'rounded-lg px-6 py-4 max-w-[85%] text-lg shadow-sm transition-all duration-200',
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground hover:shadow-md'
                            : 'bg-white hover:shadow-md'
                        )}
                      >
                        <div className="whitespace-pre-wrap">
                          <ReactMarkdown>{message.content}</ReactMarkdown>
                        </div>
                        <div>
                          {message.toolInvocations?.map(toolInvocation => {
                            const { toolName, toolCallId, state } =
                              toolInvocation

                            if (state === 'result') {
<<<<<<< HEAD
                              switch (toolName) {
                                case 'displayStockPrice':
                                case 'displayStockChart':
                                  return (
                                    <div
                                      key={toolCallId}
                                      className="flex items-center justify-center m-3 p-3 w-full"
                                    >
                                      <StockPrice
                                        symbol={
                                          (toolInvocation as any).result.symbol
                                        }
                                      />
                                    </div>
                                  )
                                case 'displayETFHeatmap':
                                  return (
                                    <div
                                      key={toolCallId}
                                      className="flex items-center justify-center m-3 p-3 w-full"
                                    >
                                      <ETFHeatmap />
                                    </div>
                                  )
                                case 'displayMarketHeatmap':
                                  return (
                                    <div
                                      key={toolCallId}
                                      className="flex items-center justify-center m-3 p-3 w-full"
                                    >
                                      <MarketHeatmap />
                                    </div>
                                  )
                                case 'displayMarketOverview':
                                  return <MarketOverview key={toolCallId} />
                                case 'displayMarketTrending':
                                  return (
                                    <div
                                      key={toolCallId}
                                      className="flex items-center justify-center m-3 p-3 w-full"
                                    >
                                      <MarketTrending />
                                    </div>
                                  )
                                case 'displayStockNews':
                                  return (
                                    <div
                                      key={toolCallId}
                                      className="flex items-center justify-center m-3 p-3 w-full"
                                    >
                                      <StockNews
                                        symbol={
                                          (toolInvocation as any).result.symbol
                                        }
                                      />
                                    </div>
                                  )
                                case 'displayStockScreener':
                                  return (
                                    <div
                                      key={toolCallId}
                                      className="flex items-center justify-center m-3 p-3 w-full"
                                    >
                                      <StockScreener />
                                    </div>
                                  )
                                case 'finalAnswer':
                                  return (
                                    <div
                                      key={toolCallId}
                                      className="prose prose-sm max-w-none"
                                    >
                                      <ReactMarkdown>
                                        {(toolInvocation as any).result}
                                      </ReactMarkdown>
                                    </div>
                                  )
                                default:
                                  return null
=======
                              if (toolName === 'displayStockPrice') {
                                const { result } = toolInvocation
                                return (
                                  <div
                                    key={toolCallId}
                                    className="flex items-center justify-center m-3 p-3 size-full"
                                  >
                                    <StockPrice symbol={result.symbol} />
                                  </div>
                                )
                              }
                              if (toolName === 'displayETFHeatmap') {
                                return (
                                  <div
                                    key={toolCallId}
                                    className="flex items-center justify-center m-3 p-3 size-full"
                                  >
                                    <ETFHeatmap />
                                  </div>
                                )
                              }
                              if (toolName === 'displayMarketHeatmap') {
                                return (
                                  <div
                                    key={toolCallId}
                                    className="flex items-center justify-center m-3 p-3 size-full"
                                  >
                                    <MarketHeatmap></MarketHeatmap>
                                  </div>
                                )
                              }
                              if (toolName === 'displayMarketOverview') {
                                return <MarketOverview key={toolCallId}></MarketOverview>
                              }
                              if (toolName === 'displayMarketTrending') {
                                return (
                                  <div
                                    key={toolCallId}
                                    className="flex items-center justify-center m-3 p-3 size-full"
                                  >
                                    <MarketTrending />
                                  </div>
                                )
                              }
                              if (toolName === 'displayStockChart') {
                                const { result } = toolInvocation
                                return (
                                  <div
                                    key={toolCallId}
                                    className="flex items-center justify-center m-3 p-3 size-full"
                                  >
                                    <StockPrice symbol={result.symbol} />
                                  </div>
                                )
                              }
                              if (toolName === 'displayStockNews') {
                                const { result } = toolInvocation
                                return (
                                  <div
                                    key={toolCallId}
                                    className="flex items-center justify-center m-3 p-3 size-full"
                                  >
                                    <StockNews symbol={result.symbol} />
                                  </div>
                                )
                              }
                              if (toolName === 'displayStockScreener') {
                                const { result } = toolInvocation
                                return (
                                  <div
                                    key={toolCallId}
                                    className="flex items-center justify-center m-3 p-3 size-full"
                                  >
                                    <StockScreener />
                                  </div>
                                )
                              }
                              if (toolName === 'finalAnswer') {
                                const { result } = toolInvocation
                                return (
                                  <div key={toolCallId}>

                                    <ReactMarkdown>{result}</ReactMarkdown>
                                    {/* {result} */}
                                  </div>
                                );
>>>>>>> 90ecc3937263132b1b3bb2f673c9b36ae630ddb0
                              }
                            }
                            return null
                          })}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="rounded-lg px-6 py-4 bg-white shadow-sm">
                        <div className="flex items-center gap-2 text-lg text-gray-500">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          StockBot is thinking...
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </AnimatePresence>
          </div>
        </ScrollArea>
      </main>

      {/* Input Area */}
      <div className="border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 w-full sticky bottom-0 z-10">
        <div className="max-w-4xl mx-auto p-4">
          <form
            onSubmit={e => {
              e.preventDefault()
              handleSubmit(e)
            }}
            className="flex gap-4 items-center"
          >
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="flex-none hover:bg-gray-100 transition-colors duration-200"
              onClick={handleResetChat}
            >
              <ResetIcon className="w-5 h-5" />
            </Button>
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Send a message..."
              className="flex-1 text-lg focus:ring-2 focus:ring-primary/50 transition-shadow duration-200"
            />
            <AnimatePresence>
              {input.trim() && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isLoading}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200"
                  >
                    <ArrowUpCircle className="w-5 h-5" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            {isLoading && (
              <Button
                type="button"
                size="icon"
                variant="destructive"
                onClick={stop}
                className="hover:bg-destructive/90 transition-colors duration-200"
              >
                <StopCircle className="w-5 h-5" />
              </Button>
            )}
            {!isLoading && messages.length > 1 && (
              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={() => reload()}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <RefreshCcw className="w-5 h-5" />
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
