import { IDiary } from '@/interfaces/record';
import React from 'react';

const DiaryItem: React.FC<IDiary> = ({ date, time, title, desc }) => {
  return (
    <div className="w-full aspect-square border-2 border-[#707070] p-4">
      <p className='text-lg mb-2'>
        <span>{date}</span>
        <br />
        <span>{time}</span>
      </p>
      <p className='text-xs font-light'>
        <span>{title}</span>
        <br />
        <span>{desc}</span>
      </p>
    </div>
  );
};

export default DiaryItem;
