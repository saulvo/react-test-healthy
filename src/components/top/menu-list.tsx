import { IMenuItem } from '@/interfaces/top';
import Image from 'next/image';
import React from 'react';

interface Props {
  list: IMenuItem[];
}

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className='grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 gap-2 px-2 lg:px-0 mb-7'>{children}</div>;
};

const Loading: React.FC = () => {
  return (
    <Container>
      {[...new Array(8)].map((_, idx) => (
        <div key={idx} className='w-[14.625rem] h-[14.625rem] bg-gray-200' />
      ))}
    </Container>
  );
};

const MenuList: React.FC<Props> & { Loading: React.FC } = ({ list }) => {
  return (
    <Container>
      {list.map((item, idx) => (
        <div key={idx} className='relative'>
          <Image src={item.photo} alt={item.name} width={234} height={234} />
          <h3 className='absolute left-0 bottom-0 min-w-[7.5rem] max-w-full px-2 py-[0.296875rem] bg-secondary text-white text-[0.9375rem]'>
            {item.name}
          </h3>
        </div>
      ))}
    </Container>
  );
};

export default MenuList;
MenuList.Loading = Loading;
