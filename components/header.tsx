import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { IconGitHub, IconSeparator } from '@/components/ui/icons'

async function UserOrLogin() {
  return (
    <>
      <Link href="/" rel="nofollow">
        <div className='font-bold text-2xl'>Investo-Bot <span className='pb-2'>🤖</span></div>
      </Link>

      <div className="flex items-center font-semibold">
        <IconSeparator className="size-6 text-muted-foreground/50" />
        <a href="/new">StockBot</a>
        <IconSeparator className="size-6 text-muted-foreground/50" />
        <a
          href="/new"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'ghost' }))}
          style={{ borderRadius: 0, color: '#F55036', padding: '4px' }}
        >
          <span className="flex">Start New Chat</span>
        </a>
      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="" //Todo: Add the github link
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }))}
          style={{ borderRadius: 0 }}
        >
          <IconGitHub />
          <span className="hidden ml-2 md:flex">GitHub</span>
        </a>
      </div>
    </header>
  )
}
