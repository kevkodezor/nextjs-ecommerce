import type { Metadata } from 'next';
import { inter } from '@/config/fonts';
import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Login',
	description: 'Authentication users',
};

export default async function AuthLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {

	const session = await auth();
	if (session?.user) redirect('/');

	return (
		<div className={`${inter.className} flex min-h-screen justify-center items-center`}>
			{children}
		</div>
	);
}
