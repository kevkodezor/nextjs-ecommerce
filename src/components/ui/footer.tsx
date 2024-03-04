import Link from "next/link";
import { titleFont } from "@/config/fonts";

export const Footer = () => {
    return (
        <footer className='flex w-full justify-center items-center text-xs h-[50px] bg-phantom-dark text-white'>
            <Link href='/'>
                <span className={`${titleFont.className} antialiased font-bold`}>Teslo </span>
                <span>| Shop </span>
                <span>© {new Date().getFullYear()}</span>
            </Link>
            <Link href='/' className='mx-2'>
                Privacidad
            </Link>
            <Link href='/'>
                Ubicaciones
            </Link>
        </footer>
    );
}