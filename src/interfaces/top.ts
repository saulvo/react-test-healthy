export interface IHero {
  name: string;
  thumbnail: string;
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

export interface ITopData {
  hero: IHero;
}
