'use client'

import * as React from 'react'
import { useRef, useEffect } from 'react'
import Script from 'next/script'

export function TickerTape2() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    const script = document.createElement('script')
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    script.async = true
    script.innerHTML = JSON.stringify({
      symbols: [
        {
            "description": "Gold",
            "proName": "TVC:GOLD"
          },
          {
            "description": "Platinum",
            "proName": "CAPITALCOM:PLATINUM"
          },
          {
            "description": "Bitcoin",
            "proName": "MARKETSCOM:BITCOIN"
          },
          {
            "description": "Etherium",
            "proName": "COINBASE:ETHUSD"
          }
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'adaptive',
      colorTheme: 'light',
      locale: 'en'
    })

    container.current.appendChild(script)

    return () => {
      if (container.current) {
        const scriptElement = container.current.querySelector('script')
        if (scriptElement) {
          container.current.removeChild(scriptElement)
        }
      }
    }
  }, [])

  return (
    <div
      className="tradingview-widget-container md:min-h-20 min-h-28"
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright flex justify-end mr-2">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
          className="justify-end text-right"
        >
          <span className="">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  )
}



