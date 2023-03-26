export interface IRecordGroup {
  name: string;
  desc: string;
  photo: string;
  link: string;
}

export interface IRecord {
  weight: { label: string; value: number }[];
  fat: { label: string; value: number }[];
}

export type TRecordOption = 'day' | 'week' | 'moon' | 'year';

export interface IExercise {
  name: string;
  kcal: number;
  minute: number;
}

export interface IDiary {
  title: string;
  desc: string;
  date: string;
  time: string;
}

export interface IDiaryQuery {
  offset: number;
  limit: number;
}