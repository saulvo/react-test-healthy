import HeroSection from '@/components/top/hero-section';
import MealHistorySection from '@/components/top/meal-history-section';
import { getGroupList, getMealHistory, getTopHeroData } from '@/lib/top';
import type { Metadata } from 'next';
import { NextPage } from 'next';
import { use } from 'react';

export const metadata: Metadata = {
  title: 'Healthy',
};
export const revalidate = 60;

const TopPage: NextPage = () => {
  const heroData = use(getTopHeroData());
  const groupList = use(getGroupList());
  const mealHistoryData = use(getMealHistory());
  return (
    <main>
      <HeroSection data={heroData} />
      <MealHistorySection groupList={groupList} data={mealHistoryData} />
    </main>
  );
};

export default TopPage;
