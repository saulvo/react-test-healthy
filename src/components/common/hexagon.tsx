import Image from 'next/image';
import React from 'react';
import './hexagon.css';

interface Props {
  name: string;
  icon: string;
  isActive?: boolean;
}
const Hexagon: React.FC<Props> = ({ icon, name, isActive }) => {
  return (
    <div className={`hexagon${isActive ? ' active' : ''}`}>
      <div>
        <Image src={icon} alt={name} width={56} height={56} className='mx-auto' />
        <h2 className='text-white text-center text-xl'>{name}</h2>
      </div>
    </div>
  );
};

export default Hexagon;
