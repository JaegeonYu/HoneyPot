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
      <div style={{ width: 200, height: 200 }}>
        <Comp.PieChart
          chartTitle="의안 추진 현황"
          legendList={[
            { title: '이행', color: PALETTE.party.PEOPLE_POWER_PARTY.MAIN },
            { title: '진행중', color: PALETTE.party.PEOPLE_POWER_PARTY.SUB },
            { title: '폐기', color: PALETTE.party.PEOPLE_POWER_PARTY.LIGHT },
          ]}
          datasetList={[30, 40, 70]}
          legendDisplay={false}
          UNIQUE_ID_FOR_LEGEND="bill-list-current-situation"
        ></Comp.PieChart>
      </div>
      <div style={{ width: 200, height: 200 }}>
        <Comp.DoughnutChart
          chartTitle="출석률"
          datasetList={[
            [30, 70],
            [30, 70],
          ]}
          legendList={[
            { title: '본회의', color: PALETTE.party.PEOPLE_POWER_PARTY.MAIN },
            { title: '상임위', color: PALETTE.party.PEOPLE_POWER_PARTY.SUB },
          ]}
          UNIQUE_ID_FOR_LEGEND="assembly-member-attendance-rate"
        ></Comp.DoughnutChart>
      </div>
    </>
  );
}
