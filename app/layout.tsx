import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hindi Voice AI Assistant',
  description: 'Control your devices with Hindi voice commands, share and earn on Base',
  openGraph: {
    title: 'Hindi Voice AI Assistant',
    description: 'Control your devices with Hindi voice commands, share and earn on Base',
    images: ['https://hindi-voice-ai.com/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
