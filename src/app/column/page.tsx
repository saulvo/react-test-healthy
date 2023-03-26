import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Column',
};

const ColumnPage: NextPage = () => {
  return <main className='max-w-ct w-full mx-auto py-4 sm:py-14'>Column</main>;
};

export default ColumnPage;
