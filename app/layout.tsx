import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Changelog Impact Scorer — Score changelog entries by user impact',
  description: 'Automatically categorize and score changelog items by user importance. Built for product managers and developer relations.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d95cbe2c-3fb5-4051-b19a-fdab0c490dad"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
