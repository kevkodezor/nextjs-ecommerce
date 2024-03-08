import { inter } from '@/config/fonts';
import { Footer, SideMenu, TopMenu } from '@/components';

export default function ShopLayout ({ children }: {children: React.ReactNode;}) {
  return (
    <main className={`${inter.className} min-h-screen`}>
      <TopMenu />
      <SideMenu />
      <div className='m-5'>
        {children}
      </div>
      <Footer />
    </main>
  );
}
