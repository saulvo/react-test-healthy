import { IRecordGroup } from '@/interfaces/record';
import Image from 'next/image';
import React from 'react';

const GroupItem: React.FC<IRecordGroup> = ({ name, link, desc, photo }) => {
  return (
    <a href={link} className='relative w-full sm:w-64 lg:w-72 bg-black after:block after:pb-full group cursor-pointer'>
      <div className='absolute inset-0 w-full h-full border-[1.5rem] border-secondary'>
        <div className='relative w-full h-full bg-black mix-blend-luminosity group-hover:mix-blend-normal transition-all'>
          <Image src={photo} alt={name} fill className='object-cover opacity-25 group-hover:opacity-40 transition-all' />
        </div>
        <div className='absolute top-1/2 left-0 -translate-y-1/2 w-full text-center'>
          <h2 className='text-secondary text-2xl mb-3'>{name}</h2>
          <p className='text-sm text-white bg-orange h-6 w-40 max-w-full mx-auto'>{desc}</p>
        </div>
      </div>
    </a>
  );
};

export default GroupItem;
