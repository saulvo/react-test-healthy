import { IMealHistory } from '@/interfaces/top';
import Image from 'next/image';
import React from 'react';

interface Props {
  list: IMealHistory[];
}

const MenuList: React.FC<Props> = ({ list }) => {
  return (
    <div className='grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-2 px-2 lg:px-0 mb-7'>
      {list.map((item, idx) => (
        <div key={idx} className='overflow-hidden relative group after:block after:pb-full'>
          <Image src={item.photo} alt={item.name} fill className='h-full object-cover group-hover:scale-110 transition-transform duration-300' />
          <h3 className='absolute left-0 bottom-0 min-w-[7.5rem] max-w-full px-2 py-[0.296875rem] bg-secondary text-white text-15'>
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
