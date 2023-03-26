import { IColumnItem } from '@/interfaces/column';
import React from 'react';
import ColumnItem from './column-item';

interface ColumnListProps {
  children: React.ReactNode;
}
const ColumnList: React.FC<ColumnListProps> & { Item: React.FC<IColumnItem> } = ({ children }) => {
  return <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pb-4 px-2 lg:px-0">{children}</div>;
};

export default ColumnList;
ColumnList.Item = ColumnItem;
