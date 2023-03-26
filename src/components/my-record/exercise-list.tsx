import { IExercise } from '@/interfaces/record';
import React from 'react';
import ExerciseItem from './exercise-item';

interface Props {
  children: React.ReactNode;
}

const ExerciseList: React.FC<Props> & { Item: React.FC<IExercise> } = ({ children }) => {
  return <div className="overflow-auto h-[12rem] flex flex-wrap scrollbar scrollbar-y-sm pt-2 pr-2 md:pr-[2.375rem]">{children}</div>;
};

export default ExerciseList;
ExerciseList.Item = ExerciseItem;
