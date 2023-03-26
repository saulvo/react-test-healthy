import { IExercise } from '@/interfaces/record';
import { getCurrentDate } from '@/utils/common';
import React from 'react';
import ExerciseList from './exercise-list';

interface Props {
  data: IExercise[];
}

const ExerciseSection: React.FC<Props> = ({ data }) => {
  return (
    <section id='my-exercise' className='bg-primary py-4 px-6 text-white mb-14'>
      <div className='flex gap-8'>
        <h2 className='text-15'>
          MY
          <br />
          EXERCISE
        </h2>
        <p className='text-[1.375rem]'>{getCurrentDate()}</p>
      </div>
      <ExerciseList>
        {data.map((exercise, idx) => (
          <ExerciseList.Item key={idx} {...exercise} />
        ))}
      </ExerciseList>
    </section>
  );
};

export default ExerciseSection;
