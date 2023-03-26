import { IExercise } from '@/interfaces/record';
import React from 'react';

const ExerciseItem: React.FC<IExercise> = ({ name, kcal, minute }) => {
  return (
    <div className='w-full md:w-1/2 md:[&:nth-child(2n+1)]:pr-10 pb-1 mb-2'>
      <div className='flex flex-wrap w-full border-b border-dark/400'>
        <div className='flex justify-between w-full gap-2 text-15'>
          <p className='flex-1'>{name}</p>
          <p className='text-primary/300 text-lg -translate-y-1'>{minute}min</p>
        </div>
        <p className='w-full text-primary/300'>{kcal}kcal</p>
      </div>
    </div>
  );
};

export default ExerciseItem;
