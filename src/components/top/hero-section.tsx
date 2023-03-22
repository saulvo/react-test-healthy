import { IHero } from '@/interfaces/top';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import './hero-section.css';

const LineChart = dynamic(() => import('../common/line-chart'), { loading: () => <p>loading...</p> });

interface Props {
  data: IHero;
}

const HeroSection: React.FC<Props> = ({ data }) => {
  return (
    <div className='bg-quaternary'>
      <div className='hero-container flex flex-wrap flex-col sm:flex-row items-center gap-2 justify-center w-full max-w-screen-xl mx-auto'>
        <div className='thumb-wrap'>
          <Image src={data.thumbnail} alt={data.name} width={540} height={312} quality={100} priority />
        </div>
        <div className='graph-wrap w-full'>
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
