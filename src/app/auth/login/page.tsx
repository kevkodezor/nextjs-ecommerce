import { titleFont } from '@/config/fonts';
import { LoginForm } from './form';

export default function Login() {
	return (
		<div className='flex flex-col'>
			<h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>
			<LoginForm />
		</div>
	);
}
