'use client';
import Link, { LinkProps } from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

interface Props extends LinkProps {
  className: string;
  activeClassName?: string;
  children: React.ReactNode;
}
const NavLink: React.FC<Props> = ({ className, activeClassName = '', children, ...props }) => {
  const segment = useSelectedLayoutSegment();
  const isActive = `/${segment}` === props.href;
  return (
    <Link {...props} className={`${className} ${isActive ? activeClassName : ''}`}>
      {children}
    </Link>
  );
};

export default NavLink;
