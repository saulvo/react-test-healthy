import { IRecordGroup } from '@/interfaces/record';
import React from 'react';
import GroupItem from './group-item';

interface Props {
  children: React.ReactNode;
}

const GroupList: React.FC<Props> & { Item: React.FC<IRecordGroup> } = ({ children }) => {
  return <section className='flex flex-wrap flex-row justify-center md:justify-between gap-4 md:gap-12 mb-14 px-4 sm:px-0'>{children}</section>;
};

export default GroupList;
GroupList.Item = GroupItem;
