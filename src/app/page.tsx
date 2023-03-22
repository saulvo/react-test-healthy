import HeroSection from '@/components/top/hero-section';
import { getTopPageData } from '@/lib/top';
import { NextPage } from 'next';
import { use } from 'react';

const TopPage: NextPage = () => {
  const data = use(getTopPageData());
  return (
    <>
      <HeroSection data={data.hero} />
    </>
  );
};

export default TopPage;
