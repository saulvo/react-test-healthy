'use client';
import { defaultQueryList } from '@/constant/common';
import { useQueryList } from '@/hooks/use-quey-list';
import { IGroupItem, IMealHistory } from '@/interfaces/top';
import { getMealHistory } from '@/lib/top';
import React from 'react';
import Button from '../common/button';
import GroupFilter from './group-filter';
import MealHistoryList from './meal-history-list';

interface Props {
  groupList: IGroupItem[];
  data: { count: number; rows: IMealHistory[] };
}

const MealHistorySection: React.FC<Props> = ({ groupList, data }) => {
  const { list, hasMore, query, onFilter, onLoadMore } = useQueryList<IMealHistory>({ query: defaultQueryList, data, fetcher: getMealHistory });

  return (
    <div className='max-w-ct w-full mx-auto pb-16'>
      <GroupFilter activeGroupId={query.groupId} groupList={groupList} onClick={onFilter} />
      <MealHistoryList>
        {list.map((item, idx) => (
          <MealHistoryList.Item key={idx} {...item} />
        ))}
      </MealHistoryList>
      {hasMore && (
        <Button type='button' onClick={onLoadMore}>
          記録をもっと見る
        </Button>
      )}
    </div>
  );
};

export default MealHistorySection;
