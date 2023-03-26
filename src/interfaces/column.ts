export interface IColumnGroup {
  id: string;
  name: string;
  desc: string;
}

export interface IColumnItem {
  groupId: string;
  name: string;
  photo: string;
  hashtags: string[];
  date: string;
}
