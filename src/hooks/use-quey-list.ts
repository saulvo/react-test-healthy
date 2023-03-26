import { IQueryList } from '@/interfaces/common';
import { useCallback, useEffect, useRef, useState } from 'react';

interface IData<T> {
  count: number;
  rows: T[];
}
interface Props<T> {
  query: IQueryList;
  data: IData<T>;
  fetcher: (_query: IQueryList) => Promise<IData<T>>;
}

const useQueryList = <T>({ data, query: initialQuery, fetcher }: Props<T>) => {
  const ref = useRef<string>(JSON.stringify(initialQuery));
  const [query, setQuery] = useState<IQueryList>(initialQuery);
  const [count, setCount] = useState<number>(data.count);
  const [menuList, setMenuList] = useState<T[]>(data.rows);

  const handleFilter = useCallback((id: string) => {
    setQuery((crr) => ({
      ...crr,
      groupId: crr.groupId !== id ? id : '',
    }));
  }, []);

  const fetchData = useCallback(
    async (query: IQueryList) => {
      try {
        const data = await fetcher(query);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    [fetcher],
  );

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

  return { list: menuList, query, hasMore: menuList.length < count, onFilter: handleFilter, onLoadMore: handleLoadMore };
};

export { useQueryList };
