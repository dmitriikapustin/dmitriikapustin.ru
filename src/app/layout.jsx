import { Open_Sans } from 'next/font/google'
import './font.sass'
import './globals.css'
import './styles.sass'

const inter = Open_Sans({ subsets: ['latin'], style: 'normal', weight: ['300', '400', '500', '600', '700', '800'] })

export const metadata = {
  title: 'Дмитрий Капустин',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
