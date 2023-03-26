'use client';
import { dropdownMenu } from '@/constant/nav';
import { classes } from '@/utils/common';
import React, { useEffect, useRef, useState } from 'react';
import NavLink from './nav-link';
import ToggleButton from './toggle-button';

const DropdownMenu: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [activeNav, setActiveNav] = useState<boolean>(false);

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
          `dropdown-menu overflow-hidden absolute top-full right-0 flex flex-col w-full max-w-[17.5rem] bg-dark/400 transition-all duration-300 ${
            activeNav ? '' : 'opacity-0 invisible translate-y-4'
          }`,
        )}>
        {dropdownMenu.map((item, idx) => (
          <NavLink
            href={item.link}
            key={idx}
            onClick={() => {
              setActiveNav((prev) => !prev);
            }}
            className='flex gap-2 py-[1.4375rem] pl-[2rem] items-center text-white group text-lg border-b border-dark/600/25 hover:bg-dark/600/25'
            activeClassName='bg-dark/600/25'>
            {item.name}
          </NavLink>
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
