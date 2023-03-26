import ColumnSection from '@/components/column/column-section';
import { getColumnList } from '@/lib/column';
import { Metadata, NextPage } from 'next';
import { use } from 'react';

export const metadata: Metadata = {
  title: 'Column',
};

export const revalidate = 60;

const ColumnPage: NextPage = () => {
  const columnList = use(getColumnList());

  return (
    <main className='max-w-ct w-full mx-auto py-4 sm:py-14'>
      <ColumnSection data={columnList} />
    </main>
  );
};

export default ColumnPage;
