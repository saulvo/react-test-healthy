import React from 'react';
import './toggle-button.css';
import { classes } from '@/utils/common';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  active: boolean;
}
const ToggleButton: React.FC<Props> = ({ active, onClick }) => {
  return (
    <button
      type='button'
      className={classes(`btn-toggle flex flex-col items-center justify-center cursor-pointer mr-2 sm:mr-0 w-8 h-8 ${active ? 'active' : ''}`)}
      onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default ToggleButton;
