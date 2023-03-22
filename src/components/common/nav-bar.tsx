import { nav } from '@/constant/nav';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className='overflow-hidden hidden sm:flex gap-2 sm:mr-4'>
      {nav.map((item, idx) => (
        <Link href={item.link} key={idx} className='flex gap-2 p-2 items-center text-white group text-lg'>
          <Image src={item.icon} alt={item.name} width={32} height={32} />
          <span className='min-w-[5.75rem] underline-offset-4 sm:group-hover:underline'>{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
