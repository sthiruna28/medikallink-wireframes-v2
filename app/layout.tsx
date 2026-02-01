import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedikaLLInk Copilot V2',
  description: 'Voice-first medical AI assistant - redesigned for speed and clarity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
