'use client'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'

export default function AuthProvider({
  children,
  pageProps,
}:{children:React.ReactNode,pageProps:AppProps}) {
  return (
    <SessionProvider >
      {children}
    </SessionProvider>
  )
}