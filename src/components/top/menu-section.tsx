'use client';
import { defaultQuery } from '@/constant/top';
import { IGroupItem, IIMenuItemQuery, IMealHistory } from '@/interfaces/top';
import { getMealHistory } from '@/lib/top';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../common/button';
import GroupFilter from './group-filter';
import MenuList from './menu-list';

interface Props {
  groupList: IGroupItem[];
  mealHistoryData: { count: number; rows: IMealHistory[] };
}

const MenuSection: React.FC<Props> = ({ groupList, mealHistoryData }) => {
  const ref = useRef<string>(JSON.stringify(defaultQuery));
  const [query, setQuery] = useState<IIMenuItemQuery>(defaultQuery);
  const [count, setCount] = useState<number>(mealHistoryData.count);
  const [menuList, setMenuList] = useState<IMealHistory[]>(mealHistoryData.rows);

  const handleFilter = useCallback((id: string) => {
    setQuery((crr) => ({
      ...crr,
      groupId: crr.groupId !== id ? id : '',
    }));
  }, []);

  const fetchData = useCallback(async (query: IIMenuItemQuery) => {
    try {
      const data = await getMealHistory(query);
      return data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleLoadMore = useCallback(async () => {
    const { offset, limit } = query;
    const data = await fetchData({
      ...query,
      offset: offset + limit,
    });
    if (data) setMenuList((curr) => [...curr, ...data.rows]);
  }, [query, fetchData]);

  useEffect(() => {
    if (ref.current === JSON.stringify(query)) return;

    (async () => {
      const data = await fetchData(query);
      if (data) {
        setMenuList(data.rows);
        setCount(data.count);
      }
    })();

    return () => {
      ref.current = '';
    };
  }, [query, fetchData]);

  return (
    <div className='max-w-ct w-full mx-auto pb-16'>
      <GroupFilter activeGroupId={query.groupId} groupList={groupList} onClick={handleFilter} />
      <MenuList list={menuList} />
      {menuList.length < count && (
        <Button type='button' onClick={handleLoadMore}>
          記録をもっと見る
        </Button>
      )}
    </div>
  );
};

export default MenuSection;
