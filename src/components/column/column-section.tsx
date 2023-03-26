'use client';
import { columnGroups } from '@/constant/column';
import { defaultQueryList } from '@/constant/common';
import { useQueryList } from '@/hooks/use-quey-list';
import { IColumnItem } from '@/interfaces/column';
import { getColumnList } from '@/lib/column';
import React from 'react';
import ColumnList from './column-list';
import GroupFilter from './group-filter';
import Button from '../common/button';

interface Props {
  data: { count: number; rows: IColumnItem[] };
}

const ColumnSection: React.FC<Props> = ({ data }) => {
  const { list, hasMore, query, onFilter, onLoadMore } = useQueryList<IColumnItem>({ query: defaultQueryList, data, fetcher: getColumnList });
  return (
    <section>
      <GroupFilter>
        {columnGroups.map((group) => (
          <GroupFilter.Item key={group.id} {...group} isActive={group.id === query.groupId} onClick={() => onFilter(group.id)} />
        ))}
      </GroupFilter>
      <ColumnList>
        {list.map((item, idx) => (
          <ColumnList.Item key={idx} {...item} />
        ))}
      </ColumnList>
      {hasMore && (
        <Button type='button' onClick={onLoadMore}>
          記録をもっと見る
        </Button>
      )}
    </section>
  );
};

export default ColumnSection;
