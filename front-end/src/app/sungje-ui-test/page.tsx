'use client';

import React, { useState } from 'react';
import * as Comp from '@/components';
import { PALETTE } from '@/_constants';
import { vars } from '@/globalTheme.css';

export default function SungjeUiTest() {
  return (
    <>
      <Comp.Category
        width="20px"
        height="24px"
        categoryId={0}
        color={{ defaultColor: vars.colors.service.MAIN_BLACK, hoverColor: vars.colors.service.MAIN_GOLD }}
      ></Comp.Category>
    </>
  );
}
