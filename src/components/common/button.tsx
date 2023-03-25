import React from 'react';
import './button.css';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, ...props }) => {
  return <button {...props} className="block w-[18.5rem] max-w-p95 mx-auto pt-[0.875rem] px-1 pb-4 text-white text-lg bg-gradient-btn rounded hover:opacity-70">{children}</button>;
};

export default Button;
