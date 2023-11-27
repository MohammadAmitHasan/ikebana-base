'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Menu from './menu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="px-10 py-4 grid grid-cols-2 sm:grid-cols-3 items-center bg-primary">
      {/* Left part */}
      <div className="sm:flex items-center space-x-2 hidden">
        <FaBars />
        <span>SHOP</span>
        <span>/</span>
        <span>MENU</span>
      </div>

      {/* Middle part */}
      <div className="flex justify-end sm:justify-center">
        <Image
          src="/images/logo.png"
          alt="Company Logo"
          height={30}
          width={50}
        />
      </div>

      {/* Right part */}
      <div className="flex justify-end">
        <div className="lg:hidden relative" onClick={() => toggleMobileMenu()}>
          <FaBars />
          <div
            className={`absolute p-5 top-0 right-0 ${
              mobileMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <Menu />
          </div>
        </div>

        <div className="hidden lg:block">
          <Menu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
