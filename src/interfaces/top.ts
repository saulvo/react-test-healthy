export interface ITopHero {
  name: string;
  thumbnail: string;
  achievementRate: number;
  record: {
    weight: {
      label: string;
      value: number;
    }[];
    fat: {
      label: string;
      value: number;
    }[];
  };
}

export interface IGroupItem {
  id: string;
  name: string;
  icon: string;
}

export interface IMealHistory {
  photo: string;
  name: string;
  groupId: string;
}

export interface IIMenuItemQuery {
  offset: number;
  limit: number;
  groupId: string;
}
