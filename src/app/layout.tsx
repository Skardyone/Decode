import './globals.css'

export const metadata = {
  title: 'Decode band',
  description: 'Decode band webpage',
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
