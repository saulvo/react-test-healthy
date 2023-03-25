import { IGroupItem, IMenuItem, ITopHero } from '@/interfaces/top';

export const topHeroData: ITopHero = {
  name: 'title',
  thumbnail: '/images/top/main-photo.png',
  date: '05/21',
  percent: 75,
  chartData: {
    green: [
      {
        month: 6,
        value: 92.34,
      },
      {
        month: 7,
        value: 85.7,
      },
      {
        month: 8,
        value: 71.05,
      },
      {
        month: 9,
        value: 68.33,
      },
      {
        month: 10,
        value: 69.69,
      },
      {
        month: 11,
        value: 52.66,
      },
      {
        month: 12,
        value: 43.81,
      },
      {
        month: 1,
        value: 56.41,
      },
      {
        month: 2,
        value: 49.6,
      },
      {
        month: 3,
        value: 46.53,
      },
      {
        month: 4,
        value: 20.99,
      },
      {
        month: 5,
        value: 17.24,
      },
    ],
    yellow: [
      {
        month: 6,
        value: 92.34,
      },
      {
        month: 7,
        value: 89.44,
      },
      {
        month: 8,
        value: 65.26,
      },
      {
        month: 9,
        value: 74.46,
      },
      {
        month: 10,
        value: 54.02,
      },
      {
        month: 11,
        value: 59.47,
      },
      {
        month: 12,
        value: 69.69,
      },
      {
        month: 1,
        value: 41.42,
      },
      {
        month: 2,
        value: 36.65,
      },
      {
        month: 3,
        value: 24.73,
      },
      {
        month: 4,
        value: 42.44,
      },
      {
        month: 5,
        value: 46.53,
      },
    ],
  },
};

export const topGroupList: IGroupItem[] = [
  {
    id: '60e934fe-cd47-4ec8-801a-75fc705ee273',
    name: 'Morning',
    icon: '/images/top/icon-knife.svg',
  },
  {
    id: '663c869f-ebac-47fe-aa13-6af282e697dc',
    name: 'Lunch',
    icon: '/images/top/icon-knife.svg',
  },
  {
    id: '0d8b2639-fc82-4133-a303-92766aaca6fc',
    name: 'Dinner',
    icon: '/images/top/icon-knife.svg',
  },
  {
    id: '6b25ae0f-f60a-48a3-b288-ae3fdbc1cabf',
    name: 'Snack',
    icon: '/images/top/icon-cup.svg',
  },
];
export const topMenuList: IMenuItem[] = [
  {
    name: '05.21.Morning',
    photo: '/images/top/m01.jpg',
    groupId: '60e934fe-cd47-4ec8-801a-75fc705ee273',
  },
  {
    name: '05.21.Lunch',
    photo: '/images/top/l01.jpg',
    groupId: '663c869f-ebac-47fe-aa13-6af282e697dc',
  },
  {
    name: '05.21.Dinner',
    photo: '/images/top/d01.jpg',
    groupId: '0d8b2639-fc82-4133-a303-92766aaca6fc',
  },
  {
    name: '05.21.Snack',
    photo: '/images/top/s01.jpg',
    groupId: '6b25ae0f-f60a-48a3-b288-ae3fdbc1cabf',
  },
  {
    name: '05.20.Morning',
    photo: '/images/top/m02.jpg',
    groupId: '60e934fe-cd47-4ec8-801a-75fc705ee273',
  },
  {
    name: '05.20.Lunch',
    photo: '/images/top/l02.jpg',
    groupId: '663c869f-ebac-47fe-aa13-6af282e697dc',
  },
  {
    name: '05.20.Dinner',
    photo: '/images/top/d02.jpg',
    groupId: '0d8b2639-fc82-4133-a303-92766aaca6fc',
  },
  {
    name: '05.20.Morning',
    photo: '/images/top/m03.jpg',
    groupId: '60e934fe-cd47-4ec8-801a-75fc705ee273',
  },
  {
    name: '05.20.Lunch',
    photo: '/images/top/l03.jpg',
    groupId: '663c869f-ebac-47fe-aa13-6af282e697dc',
  },
];
