export const classes = (className: string) => [...new Set(className.split(' '))].join(' ');
