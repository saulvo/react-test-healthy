import DiarySection from '@/components/my-record/diary-section';
import ExerciseSection from '@/components/my-record/exercise-section';
import GroupList from '@/components/my-record/group-list';
import RecordSection from '@/components/my-record/record-section';
import { recordGroups } from '@/constant/record';
import { getDiaryList, getExerciseList, getRecord } from '@/lib/record';
import { Metadata, NextPage } from 'next';
import { use } from 'react';

export const metadata: Metadata = {
  title: 'My Record',
};

export const revalidate = 60;

const RecordPage: NextPage = () => {
  const recordDay = use(getRecord('day'));
  const exerciseList = use(getExerciseList());
  const diaryList = use(getDiaryList());

  return (
    <main className='max-w-ct w-full mx-auto py-4 sm:py-14'>
      <GroupList>
        {recordGroups.map((group, idx) => (
          <GroupList.Item key={idx} {...group} />
        ))}
      </GroupList>
      <RecordSection initialRecordData={recordDay} />
      <ExerciseSection data={exerciseList} />
      <DiarySection data={diaryList} />
    </main>
  );
};

export default RecordPage;
