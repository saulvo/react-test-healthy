import { ITopData } from '@/interfaces/top';
import data from '@/mock/top-page';

export const getTopPageData = async (): Promise<ITopData> =>
  new Promise((resolve) => {
    resolve(data);
  });
