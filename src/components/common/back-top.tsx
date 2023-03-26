'use client';
import React, { useEffect, useState } from 'react';

const BackTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(document.documentElement.scrollTop > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!show) return <></>;
  return (
    <div className='fixed z-50 bottom-0 w-full'>
      <div className='relative max-w-ct w-full mx-auto'>
        <button
          title='Back top'
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className='absolute bottom-2 xl:bottom-4 right-2 xl:right-auto xl:left-full grid place-items-center w-12 h-12  xl:translate-x-4 rounded-full border border-dark/400 bg-white hover:bg-dark/400 transition-colors group'>
          <svg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14.5852 9.04198L8.00017 2.65788L1.41513 9.04198L0.53894 8.19253L8.00018 0.958984L15.4614 8.19253L14.5852 9.04198Z'
              className='fill-dark/400 group-hover:fill-white transition-all'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BackTop;
