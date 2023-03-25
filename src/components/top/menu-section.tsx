'use client';
import { defaultQuery } from '@/constant/top';
import { IGroupItem, IIMenuItemQuery, IMenuItem } from '@/interfaces/top';
import { getMenuList } from '@/lib/top';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../common/button';
import GroupFilter from './group-filter';
import MenuList from './menu-list';

interface Props {
  groupList: IGroupItem[];
  menuListData: { count: number; rows: IMenuItem[] };
}

const MenuSection: React.FC<Props> = ({ groupList, menuListData }) => {
  const ref = useRef<string>(JSON.stringify(defaultQuery));
  const [query, setQuery] = useState<IIMenuItemQuery>(defaultQuery);
  const [count, setCount] = useState<number>(menuListData.count);
  const [menuList, setMenuList] = useState<IMenuItem[]>(menuListData.rows);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFilter = useCallback((id: string) => {
    setQuery((crr) => ({
      ...crr,
      groupId: crr.groupId !== id ? id : '',
    }));
  }, []);

  const fetchData = useCallback(async (query: IIMenuItemQuery) => {
    try {
      const data = await getMenuList(query);
      return data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleLoadMore = useCallback(async () => {
    setLoading(true);
    const { offset, limit } = query;
    const data = await fetchData({
      ...query,
      offset: offset + limit,
    });
    if (data) setMenuList((curr) => [...curr, ...data.rows]);
    setLoading(false);
  }, [query, fetchData]);

  useEffect(() => {
    if (ref.current === JSON.stringify(query)) return;

    (async () => {
      setLoading(true);
      const data = await fetchData(query);
      if (data) {
        setMenuList(data.rows);
        setCount(data.count);
      }
      setLoading(false);
    })();

    return () => {
      ref.current = '';
    };
  }, [query, fetchData]);

  return (
    <div className='max-w-ct w-full mx-auto pb-16'>
      <GroupFilter activeGroupId={query.groupId} groupList={groupList} onClick={handleFilter} />
      {loading ? <MenuList.Loading /> : <MenuList list={menuList} />}
      {menuList.length < count && (
        <Button type='button' onClick={handleLoadMore}>
          記録をもっと見る
        </Button>
      )}
    </div>
  );
};

export default MenuSection;
