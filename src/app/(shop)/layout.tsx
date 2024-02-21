import type { Metadata } from 'next';
import { inter } from '@/config/fonts';

export const metadata: Metadata = {
  title: 'Teslo Shop',
  description: 'Layout teslo shop',
};

export default function ShopLayout ({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <main className={`${inter.className} min-h-screen`}>
      {children}
    </main>
  );
}
