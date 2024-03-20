import React from 'react';

export interface NewsProps {
  children: React.ReactNode;
  date: String;
  onClick: ([...args]: any) => any;
}
