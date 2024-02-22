import type { Metadata } from 'next';
import { inter } from '@/config/fonts';
import { SideMenu, TopMenu } from '@/components';

export const metadata: Metadata = {
  title: 'Teslo Shop',
  description: 'Layout teslo shop',
};

export default function ShopLayout ({ children }: {children: React.ReactNode;}) {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <TopMenu />
      <SideMenu />
      <div className='m-5'>
        {children}
      </div>
    </main>
  );
}
