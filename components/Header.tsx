"use client";
import Link from 'next/link';
import Image from 'next/image';
import { APP_CONFIG, EXTERNAL_LINKS, ROUTES } from '@/lib/constants';
import { MobileMenu } from './MobileMenu';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <a href="https://www.cswingenieriacivil.com/herramientas" className="flex items-center" target="_blank" rel="noopener noreferrer">
            {/* Logo temporalmente oculto mientras se actualiza el archivo SVG */}
            {/* <Image
              src="/negrologotij webpage.svg"
              alt={APP_CONFIG.COMPANY}
              width={150}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            /> */}
            <span className="text-xl font-bold text-gray-900">{APP_CONFIG.COMPANY}</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a 
            href="https://www.cswingenieriacivil.com/herramientas"
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 hover:text-[#f1d475] transition-colors"
          >
            Más
          </a>
          <a 
            href={EXTERNAL_LINKS.CONTACT}
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 hover:text-[#f1d475] transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu />
      </nav>
    </header>
  );
}

export default Header;
