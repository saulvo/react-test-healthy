import { ITopHero } from '@/interfaces/top';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import './hero-section.css';

const LineChart = dynamic(() => import('../common/line-chart'), { loading: () => <p>loading...</p> });

interface Props {
  data: ITopHero;
}

const HeroSection: React.FC<Props> = ({ data }) => {
  return (
    <div className='bg-quaternary'>
      <div className='hero-container flex flex-wrap flex-col sm:flex-row items-center gap-2 justify-center w-full max-w-screen-xl mx-auto'>
        <div className='thumb-wrap'>
          <Image src={data.thumbnail} alt={data.name} width={540} height={312} quality={100} priority />
          <svg viewBox='0 0 36 36' width='181' height='181' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <path
              stroke='#FC7400'
              strokeWidth='1'
              strokeDasharray={data.percent}
              strokeLinecap='round'
              fill='none'
              d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
              filter='url(#dropshadow)'
            />
            <path
              stroke='white'
              strokeWidth='1'
              strokeDasharray={data.percent}
              strokeLinecap='round'
              fill='none'
              d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <filter id='dropshadow' x='-2' y='-2' width='100' height='100'>
              <feGaussianBlur stdDeviation='1'></feGaussianBlur>
            </filter>
          </svg>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-shadow'>
            <span className='text-lg mr-1'>{data.date}</span>
            <span className='text-[1.5625rem]'>{data.percent}%</span>
          </div>
        </div>
        <div className='graph-wrap'>
          <LineChart
            data={{
              labels: data.chartData.green.map((item) => `${item.month}月`),
              datasets: [
                {
                  label: 'green',
                  data: data.chartData.green.map((x) => x.value),
                  borderColor: '#8FE9D0',
                  backgroundColor: '#8FE9D0',
                },
                {
                  label: 'yellow',
                  data: data.chartData.yellow.map((x) => x.value),
                  borderColor: '#FFCC21',
                  backgroundColor: '#FFCC21',
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
