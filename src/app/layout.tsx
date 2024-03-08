import type { Metadata } from 'next';
import { inter } from '@/config/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: { template: 'Teslo Shop | %s', default: 'Teslo Shop | Inicio' },
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
