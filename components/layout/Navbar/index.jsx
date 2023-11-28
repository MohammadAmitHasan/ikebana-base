'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Menu from './menu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Close the mobile menu when the user scrolls
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="px-10 py-6 fixed w-full top-0 z-[1600] bg-primary">
      <div className="grid grid-cols-2 sm:grid-cols-3 items-center">
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
          <div
            className="lg:hidden relative"
            onClick={() => toggleMobileMenu()}
          >
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
      </div>
    </nav>
  );
};
export default Navbar;
