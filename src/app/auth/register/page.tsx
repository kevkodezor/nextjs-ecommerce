import { titleFont } from '@/config/fonts';
import { RegisterForm } from './form';

export default function Register() {
	return (
		<div className='flex flex-col'>
			<h1 className={`${titleFont.className} text-4xl mb-5`}>Registro</h1>
			<RegisterForm />
		</div>
	);
}
