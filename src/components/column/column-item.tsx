import { IColumnItem } from '@/interfaces/column';
import Image from 'next/image';
import React from 'react';
import './column-item.css';

const ColumnItem: React.FC<IColumnItem> = ({ name, photo, hashtags, date }) => {
  return (
    <div className='mb-2.5 group'>
      <div className='overflow-hidden relative column-thumb text-15 mb-2'>
        <Image src={photo} alt={name} fill className='group-hover:scale-110 transition-transform duration-300 object-cover' />
        <span className='absolute left-0 bottom-0 text-white bg-secondary px-2 h-6'>{date}</span>
      </div>
      <h3 className='mb-1 text-15'>{name}</h3>
      {hashtags.length > 0 && (
        <p className='flex flex-wrap gap-2 text-xs text-orange'>
          {hashtags.map((hashtag, idx) => (
            <span key={idx}>#{hashtag}</span>
          ))}
        </p>
      )}
    </div>
  );
};

export default ColumnItem;
