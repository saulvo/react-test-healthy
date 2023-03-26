import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DropdownMenu from './dropdown-menu';
import Navbar from './nav-bar';

const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50 bg-dark/500 h-16 w-full'>
      <div className='relative flex items-center w-full h-full max-w-ct mx-auto'>
        <Link href='/' className='mr-auto'>
          <Image src='/images/common/logo.svg' alt='Healthy' width={144} height={64} priority />
        </Link>
        <Navbar />
        <DropdownMenu />
      </div>
    </header>
  );
};

export default Header;
