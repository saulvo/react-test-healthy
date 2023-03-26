export const classes = (className: string) => [...new Set(className.split(' '))].join(' ');

export const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}.${month}.${day}`;
};
