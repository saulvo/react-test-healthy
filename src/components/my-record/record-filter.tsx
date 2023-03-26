import { TRecordOption } from '@/interfaces/record';
import React from 'react';

interface Props {
  value: TRecordOption;
  options: { label: string; value: TRecordOption }[];
  onChange: (_value: TRecordOption) => void;
}

const classes = (defaultClass: string, active: boolean) => {
  return [defaultClass, active ? 'bg-primary/300 text-white' : 'bg-white text-primary/300'].join(' ');
};
const RecordFilter: React.FC<Props> = ({ value, options, onChange }) => {
  return (
    <div className='flex flex-wrap gap-4 w-full text-center'>
      {options.map((opt, idx) => (
        <div
          key={idx}
          className={classes('w-14 h-6 rounded-3xl transition-colors cursor-pointer', value === opt.value)}
          onClick={() => onChange(opt.value)}>
          {opt.label}
        </div>
      ))}
    </div>
  );
};

export default RecordFilter;
