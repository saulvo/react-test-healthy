'use client';
import { dropdownMenu, nav } from '@/constant/nav';
import { classes } from '@/utils/common';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import ToggleButton from './toggle-button';
import useWindowSize from '@/hooks/use-window-size';

const DropdownMenu: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [activeNav, setActiveNav] = useState<boolean>(false);
  const { width = 0 } = useWindowSize();

  useEffect(() => {
    const handleClick = (e: any) => {
      const { current: container } = refContainer;
      if (container && !container.contains(e.target)) {
        setActiveNav(false);
      }
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={refContainer}>
      <nav
        className={classes(
          `dropdown-menu overflow-hidden absolute top-full right-0 flex flex-col w-full max-w-[17.5rem] bg-tertiary transition-all duration-300 ${
            activeNav ? '' : 'opacity-0 invisible translate-y-4'
          }`,
        )}>
        {width < 640 &&
          nav.map((item, idx) => (
            <Link
              href={item.link}
              key={idx}
              onClick={() => {
                setActiveNav((prev) => !prev);
              }}
              className='flex gap-2 py-[1.4375rem] pl-[2rem] items-center text-white group text-lg border-b border-quaternary/25 hover:bg-quaternary/25'>
              {item.name}
            </Link>
          ))}
        {dropdownMenu.map((item, idx) => (
          <Link
            href={item.link}
            key={idx}
            onClick={() => {
              setActiveNav((prev) => !prev);
            }}
            className='flex gap-2 py-[1.4375rem] pl-[2rem] items-center text-white group text-lg border-b border-quaternary/25 hover:bg-quaternary/25'>
            {item.name}
          </Link>
        ))}
      </nav>
      <ToggleButton
        active={activeNav}
        onClick={() => {
          setActiveNav((prev) => !prev);
        }}
      />
    </div>
  );
};

export default DropdownMenu;
