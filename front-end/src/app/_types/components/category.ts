import React from 'react';

export interface CategoryProps {
  categoryId: number | string;
}

export interface CategoryListProps {
  onClick: ([...arg]: any) => any;
}
