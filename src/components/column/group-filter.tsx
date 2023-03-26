import { IColumnGroup } from '@/interfaces/column';

type GroupFilterItemProps = IColumnGroup & { isActive: boolean; onClick: () => void };
const GroupFilterItem: React.FC<GroupFilterItemProps> = ({ id, name, desc, isActive, onClick }) => (
  <div
    key={id}
    onClick={onClick}
    className={`text-white px-2 pt-6 pb-5.5 text-center cursor-pointer transition-colors ${
      isActive ? 'bg-quaternary/80' : 'bg-quaternary hover:bg-quaternary/80'
    }`}>
    <h2 className='text-secondary text-22'>{name}</h2>
    <div className='w-14 h-[1px] mt-2.5 mb-2 mx-auto bg-white' />
    <p className='text-lg'>{desc}</p>
  </div>
);

interface Props {
  children: React.ReactNode;
}

const GroupFilter: React.FC<Props> & { Item: React.FC<GroupFilterItemProps> } = ({ children }) => {
  return <div className='grid xs:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 px-4 lg:px-0 pb-14'>{children}</div>;
};

export default GroupFilter;
GroupFilter.Item = GroupFilterItem;
