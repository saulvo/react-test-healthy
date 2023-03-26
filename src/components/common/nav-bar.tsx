import { nav } from '@/constant/nav';
import Image from 'next/image';
import React from 'react';
import NavLink from './nav-link';
import TotalNotifications from './total-noti';

const Navbar: React.FC = () => {
  return (
    <nav className='overflow-hidden hidden sm:flex gap-2 sm:mr-4'>
      {nav.map((item, idx) => (
        <NavLink href={item.link} key={idx} className='flex gap-2 p-2 items-center text-white group underline-offset-4' activeClassName='underline'>
          <div className='relative'>
            <Image src={item.icon} alt={item.name} width={32} height={32} />
            {item?.noti && <TotalNotifications />}
          </div>
          <span className='min-w-[5.75rem] group-hover:underline'>{item.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
