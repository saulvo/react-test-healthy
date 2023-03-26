import { IDiary } from '@/interfaces/record';
import React from 'react';
import DiaryItem from './diary-item';

interface Props {
  children: React.ReactNode;
}
const DiaryList: React.FC<Props> & { Item: React.FC<IDiary> } = ({ children }) => {
  return <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-[1.875rem]'>{children}</div>;
};

export default DiaryList;
DiaryList.Item = DiaryItem;
