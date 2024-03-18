import React from 'react';

export interface CardProps {
  ratio: '1 / 1' | '4 / 5';
  imgUrl: string;
  children: React.ReactNode;
  onClick: ([...args]: any) => any;
}
