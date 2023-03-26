'use client';
import { recordFilter } from '@/constant/record';
import { IRecord, TRecordOption } from '@/interfaces/record';
import { getRecord } from '@/lib/record';
import { getCurrentDate } from '@/utils/common';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import RecordFilter from './record-filter';

const LineChart = dynamic(() => import('../common/line-chart'), { loading: () => <p>loading...</p> });

interface Props {
  initialRecordData: IRecord;
}

const RecordSection: React.FC<Props> = ({ initialRecordData }) => {
  const recordRef = useRef<TRecordOption | ''>('day');
  const [value, setValue] = useState<TRecordOption>(recordFilter[0].value);
  const [record, setRecord] = useState<IRecord>(initialRecordData);

  useEffect(() => {
    if (recordRef.current === value) return;
    (async () => {
      const data = await getRecord(value);
      setRecord(data);
    })();
    return () => {
      recordRef.current = '';
    };
  }, [value]);

  return (
    <section id='body-record' className='bg-primary py-4 px-6 text-white mb-14'>
      <div className='flex gap-8'>
        <h2 className='text-15'>
          BODY
          <br />
          RECORD
        </h2>
        <p className='text-[1.375rem]'>{getCurrentDate()}</p>
      </div>

      <div className='relative w-full pb-2'>
        <LineChart
          aspectRatio={896 / 210}
          data={{
            labels: record.weight.map(({ label }) => label),
            datasets: [
              {
                label: 'weight',
                data: record.weight.map((x) => x.value),
                borderColor: '#8FE9D0',
                backgroundColor: '#8FE9D0',
              },
              {
                label: 'fat',
                data: record.fat.map((x) => x.value),
                borderColor: '#FFCC21',
                backgroundColor: '#FFCC21',
              },
            ],
          }}
        />
      </div>
      <RecordFilter value={value} options={recordFilter} onChange={(value) => setValue(value)} />
    </section>
  );
};

export default RecordSection;
