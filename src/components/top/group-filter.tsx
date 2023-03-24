import { IGroupItem } from '@/interfaces/top';
import React, { SetStateAction } from 'react';
import Hexagon from '../common/hexagon';

interface Props {
  activeGroupId: string;
  groupList: IGroupItem[];
  onClick: (_id: string) => void;
}

const GroupFilter: React.FC<Props> = ({ activeGroupId, groupList, onClick }) => {
  return (
    <div className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-20 -mx-1 py-6'>
      {groupList.map((group) => (
        <div key={group.id} className='px-1' onClick={() => onClick(group.id)}>
          <Hexagon isActive={activeGroupId === group.id} icon='/images/top/icon-knife.svg' name='Morning' />
        </div>
      ))}
    </div>
  );
};

export default GroupFilter;
