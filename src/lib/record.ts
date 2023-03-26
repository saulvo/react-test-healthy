import { defaultDiaryQuery } from '@/constant/record';
import { IDiary, IDiaryQuery, IExercise, IRecord, TRecordOption } from '@/interfaces/record';
import { record } from '@/mock/my-record';

export const getRecord = async (key: TRecordOption): Promise<IRecord> =>
  new Promise((resolve) => {
    resolve(record[key]);
  });

export const getExerciseList = async (): Promise<IExercise[]> =>
  new Promise((resolve) => {
    resolve(
      [...new Array(30)].map((_, idx) => ({
        name: '家事全般（立位・軽い）',
        kcal: 26,
        minute: 10,
      })),
    );
  });

export const getDiaryList = async ({ offset, limit }: IDiaryQuery = defaultDiaryQuery): Promise<{ count: number; rows: IDiary[] }> =>
  new Promise((resolve) => {
    const count = 20;
    const fake = [...new Array(count)].map(() => ({
      date: '2021.05.21',
      time: '23:25',
      title: '私の日記の記録が一部表示されます。',
      desc: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    }));
    resolve({
      count,
      rows: fake.slice(offset, offset + limit),
    });
  });
