import './globals.css'

export const metadata = {
  title: 'DECODE',
  description: 'Webpage of the rock band Decode',
  
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
