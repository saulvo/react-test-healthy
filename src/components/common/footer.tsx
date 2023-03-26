import { footerNav } from '@/constant/footer';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-dark/500 text-white text-[0.6875rem] py-10 md:py-14'>
      <div className='flex flex-wrap gap-6 md:gap-11 px-2 md:px-0 max-w-ct w-full mx-auto'>
        {footerNav.map((item, idx) => (
          <Link key={idx} href={item.link} className='underline-offset-4 hover:underline'>
            {item.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
