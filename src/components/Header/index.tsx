import { nav } from '@/constant/nav';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='bg-primary h-16 w-full'>
      <div className='flex items-center w-full max-w-ct mx-auto'>
        <Image src='/images/common/logo.svg' alt='Healthy' width={144} height={64} />
        <nav className='flex gap-2 ml-auto mr-4'>
          {nav.map((item, idx) => (
            <Link href={item.link} key={idx} className='flex gap-2 p-2 items-center text-white group'>
              <Image src={item.icon} alt={item.name} width={32} height={32} />
              <span className='min-w-[5.75rem] underline-offset-4 group-hover:underline'>{item.name}</span>
            </Link>
          ))}
        </nav>
        <button type='button' className="cursor-pointer">
          <Image src='/images/common/menu-bar.svg' alt='Menu toggle' width={32} height={32} />
        </button>
      </div>
    </header>
  );
};

export default Header;
