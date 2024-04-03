import React from 'react';

export default function useDateFormat({ date, isFullYear }: { date: string; isFullYear: boolean }) {
  const newDate = date.split('-');
  const year = isFullYear ? newDate[0] : newDate[0].slice(2, 4);

  return `${year}년 ${newDate[1]}월 ${newDate[2]}일`;
}
