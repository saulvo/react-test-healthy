import { IMealHistory } from '@/interfaces/top';
import Image from 'next/image';
import React from 'react';

const MealHistoryItem: React.FC<IMealHistory> = ({ name, photo }) => (
  <div className='overflow-hidden relative group after:block after:pb-full'>
    <Image src={photo} alt={name} fill className='h-full object-cover group-hover:scale-110 transition-transform duration-300' />
    <h3 className='absolute left-0 bottom-0 min-w-[7.5rem] max-w-full px-2 py-[0.296875rem] bg-secondary text-white text-15'>{name}</h3>
  </div>
);

interface MealHistoryListProps {
  children: React.ReactNode;
}
const MealHistoryList: React.FC<MealHistoryListProps> & { Item: React.FC<IMealHistory> } = ({ children }) => {
  return <div className='grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-2 px-2 lg:px-0 mb-7'>{children}</div>;
};

export default MealHistoryList;
MealHistoryList.Item = MealHistoryItem;
