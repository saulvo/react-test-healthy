'use client';
import { defaultQuery } from '@/constant/top';
import { IGroupItem, IIMenuItemQuery, IMenuItem } from '@/interfaces/top';
import { getMenuList } from '@/lib/top';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import GroupFilter from './group-filter';
import MenuList from './menu-list';

interface Props {
  groupList: IGroupItem[];
  menuListData: { count: number; rows: IMenuItem[] };
}

const MenuSection: React.FC<Props> = ({ groupList, menuListData }) => {
  const ref = useRef<string>(JSON.stringify(defaultQuery));
  const [query, setQuery] = useState<IIMenuItemQuery>(defaultQuery);
  const [menuList, setMenuList] = useState<IMenuItem[]>(menuListData.rows);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFilter = useCallback((id: string) => {
    setQuery((crr) => ({
      ...crr,
      groupId: crr.groupId !== id ? id : '',
    }));
  }, []);

  useEffect(() => {
    if (ref.current === JSON.stringify(query)) return;
    (async () => {
      try {
        setLoading(true);
        const { rows } = await getMenuList(query);
        setMenuList(rows);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();

    return () => {
      ref.current = '';
    };
  }, [query]);

  return (
    <div className='max-w-ct w-full mx-auto'>
      <GroupFilter activeGroupId={query.groupId} groupList={groupList} onClick={handleFilter} />
      {loading ? <MenuList.Loading /> : <MenuList list={menuList} />}
    </div>
  );
};

export default MenuSection;
