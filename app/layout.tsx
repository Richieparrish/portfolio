import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Providers from "./providers"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Richard Adenigba | Administrative Professional",
  description: "Experienced Administrative Assistant with expertise in healthcare and commercial sectors, skilled in office management, data handling, and customer service",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased ${_geist.className} ${_geistMono.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
