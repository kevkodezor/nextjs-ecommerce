import Link from "next/link";
import { titleFont } from "@/config/fonts";

export const Footer = () => {
    return (
        <footer className='fixed bottom-0 flex w-full justify-center items-center text-xs h-[25px] bg-phantom-dark text-white z-20'>
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