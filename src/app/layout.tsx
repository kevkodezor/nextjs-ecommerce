import type { Metadata } from 'next';
import { inter } from '@/config/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Teslo Shop',
  description: 'Ecommerce',
};

export default function RootLayout({ children }: {children: React.ReactNode;}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
