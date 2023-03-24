export interface ITopHero {
  name: string;
  thumbnail: string;
  date: string;
  percent: number;
  chartData: {
    green: {
      month: number;
      value: number;
    }[];
    yellow: {
      month: number;
      value: number;
    }[];
  };
}

export interface IGroupItem {
  id: string;
  name: string;
  icon: string;
}

export interface IMenuItem {
  photo: string;
  name: string;
  groupId: string;
}

export interface IIMenuItemQuery {
  offset: number;
  limit: number;
  groupId: string;
}