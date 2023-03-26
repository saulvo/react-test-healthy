import { IGroupItem, IMealHistory, ITopHero } from '@/interfaces/top';
import { record } from './my-record';

export const topHeroData: ITopHero = {
  name: 'title',
  thumbnail: '/images/top/main-photo.png',
  achievementRate: 75,
  record: record.year,
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

export const mealHistory: IMealHistory[] = [
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
