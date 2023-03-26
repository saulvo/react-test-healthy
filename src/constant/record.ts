import { IDiaryQuery, IRecordGroup, TRecordOption } from '@/interfaces/record';

export const recordGroups: IRecordGroup[] = [
  {
    name: 'BODY RECORD',
    link: '/my-record#body-record',
    desc: '自分のカラダの記録',
    photo: '/images/record/body-record.jpg',
  },
  {
    name: 'MY EXERCISE',
    link: '/my-record#my-exercise',
    desc: '自分の運動の記録',
    photo: '/images/record/my-exercise.jpg',
  },
  {
    name: 'MY DIARY',
    link: '/my-record#my-diary',
    desc: '自分の日記',
    photo: '/images/record/my-diary.jpg',
  },
];

export const recordFilter: { label: string; value: TRecordOption }[] = [
  { label: '日', value: 'day' },
  { label: '週', value: 'week' },
  { label: '月', value: 'moon' },
  { label: '年', value: 'year' },
];

export const defaultDiaryQuery: IDiaryQuery = {
  offset: 0,
  limit: 8,
};
