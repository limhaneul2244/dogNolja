import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'dogNolja',
  description: 'detailReview page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
