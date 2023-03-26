'use client';
import { defaultDiaryQuery } from '@/constant/record';
import { IDiary, IDiaryQuery } from '@/interfaces/record';
import { getDiaryList } from '@/lib/record';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import DiaryList from './diary-list';
import Button from '../common/button';

interface Props {
  data: {
    count: number;
    rows: IDiary[];
  };
}

const DiarySection: React.FC<Props> = ({ data }) => {
  const refQuery = useRef<string>(JSON.stringify(defaultDiaryQuery));
  const [query, setQuery] = useState<IDiaryQuery>(defaultDiaryQuery);
  const [diaryList, setDiaryList] = useState<IDiary[]>(data.rows);

  const fetchData = useCallback(async (query: IDiaryQuery) => {
    try {
      const data = await getDiaryList(query);
      return data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (refQuery.current === JSON.stringify(query)) return;
    (async () => {
      const data = await fetchData(query);
      if (data) {
        setDiaryList((curr) => [...curr, ...data.rows]);
      }
    })();
    return () => {
      refQuery.current = '';
    };
  }, [query, fetchData]);

  return (
    <section id='my-diary' className="px-4 lg:px-0">
      <h2 className='text-22'>MY DIARY</h2>
      <DiaryList>
        {diaryList.map((item, idx) => (
          <DiaryList.Item key={idx} {...item} />
        ))}
      </DiaryList>
      {diaryList.length < data.count && (
        <Button
          type='button'
          onClick={() => {
            setQuery((curr) => ({
              ...curr,
              offset: curr.offset + curr.limit,
            }));
          }}>
          記録をもっと見る
        </Button>
      )}
    </section>
  );
};

export default DiarySection;
