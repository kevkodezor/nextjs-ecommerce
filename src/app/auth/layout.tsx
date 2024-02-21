import type { Metadata } from 'next';
import { inter } from '@/config/fonts';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Authentication users',
};

export default function AuthLayout ({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className={`${inter.className} min-h-screen`}>
      {children}
    </div>
  );
}