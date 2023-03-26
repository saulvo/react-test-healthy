import { defaultQueryList } from '@/constant/common';
import { IColumnItem } from '@/interfaces/column';
import { IQueryList } from '@/interfaces/common';
import { columnList } from '@/mock/column';

export const getColumnList = async (query: IQueryList = defaultQueryList): Promise<{ count: number; rows: IColumnItem[] }> =>
  new Promise((resolve) => {
    const { groupId, offset, limit } = query;
    if (groupId === '') {
      resolve({ count: columnList.length, rows: columnList.slice(offset, offset + limit) });
      return;
    }
    const data = columnList.filter((item) => item.groupId === groupId);
    resolve({ count: data.length, rows: data.slice(offset, offset + limit) });
  });
