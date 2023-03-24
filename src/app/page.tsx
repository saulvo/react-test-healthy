import HeroSection from '@/components/top/hero-section';
import MenuSection from '@/components/top/menu-section';
import { getGroupList, getMenuList, getTopHeroData } from '@/lib/top';
import { NextPage } from 'next';
import { use } from 'react';

const TopPage: NextPage = () => {
  const heroData = use(getTopHeroData());
  const groupList = use(getGroupList());
  const menuListData = use(getMenuList());
  return (
    <>
      <HeroSection data={heroData} />
      <MenuSection groupList={groupList} menuListData={menuListData} />
    </>
  );
};

export default TopPage;
