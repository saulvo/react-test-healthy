import { defaultQuery } from '@/constant/top';
import { IGroupItem, IIMenuItemQuery, IMealHistory, ITopHero } from '@/interfaces/top';
import { topGroupList, topHeroData, mealHistory } from '@/mock/top';

export const getTopHeroData = async (): Promise<ITopHero> =>
  new Promise((resolve) => {
    resolve(topHeroData);
  });

export const getGroupList = async (): Promise<IGroupItem[]> =>
  new Promise((resolve) => {
    resolve(topGroupList);
  });

export const getMealHistory = async (query: IIMenuItemQuery = defaultQuery): Promise<{ count: number; rows: IMealHistory[] }> =>
  new Promise((resolve) => {
    const { groupId, offset, limit } = query;
    if (groupId === '') {
      resolve({ count: mealHistory.length, rows: mealHistory.slice(offset, offset + limit) });
      return;
    }
    const data = mealHistory.filter((item) => item.groupId === groupId);
    resolve({ count: data.length, rows: data.slice(offset, offset + limit) });
  });
