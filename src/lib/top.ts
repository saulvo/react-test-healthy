import { defaultQuery } from '@/constant/top';
import { IGroupItem, IIMenuItemQuery, IMenuItem, ITopHero } from '@/interfaces/top';
import { topGroupList, topHeroData, topMenuList } from '@/mock/top-page';

export const getTopHeroData = async (): Promise<ITopHero> =>
  new Promise((resolve) => {
    resolve(topHeroData);
  });

export const getGroupList = async (): Promise<IGroupItem[]> =>
  new Promise((resolve) => {
    resolve(topGroupList);
  });

export const getMenuList = async (query: IIMenuItemQuery = defaultQuery): Promise<{ count: number; rows: IMenuItem[] }> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const { groupId, offset, limit } = query;
      if (groupId === '') {
        resolve({ count: topMenuList.length, rows: topMenuList.slice(offset, offset + limit) });
        return;
      }
      const data = topMenuList.filter((item) => item.groupId === groupId);
      resolve({ count: data.length, rows: data.slice(offset, offset + limit) });
    }, 300);
  });
