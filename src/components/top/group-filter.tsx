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
    <div className='grid-group-filter grid justify-center gap-6 md:gap-20 py-6 '>
      {groupList.map((group) => (
        <div key={group.id} onClick={() => onClick(group.id)}>
          <Hexagon isActive={activeGroupId === group.id} icon={group.icon} name={group.name} />
        </div>
      ))}
    </div>
  );
};

export default GroupFilter;
