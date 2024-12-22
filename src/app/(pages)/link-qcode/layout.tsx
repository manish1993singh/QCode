import Head from 'next/head'
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <div>header</div>
            {children}</body>
      </html>
    )
  }
  