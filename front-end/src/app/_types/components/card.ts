import React from 'react';

export interface CardProps {
  ratio: '1 / 1' | '4 / 6' | '4 / 7';
  imgUrl: string;
  children: React.ReactNode;
  badge: { isBadgeNeed: boolean; text?: string };
  onClick?: ([...args]: any) => any;
}
