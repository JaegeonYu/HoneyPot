'use client';

import React, { useState } from 'react';
import * as S from './style.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ArrowBlack, HelpCircle } from '@/_assets/icon';

type ActiveItemsState = {
  [key: string]: boolean;
};

export default function JunguTest() {
  const [activeItems, setActiveItems] = useState<ActiveItemsState>({});

  const toggleAccordion = (itemId: string) => {
    setActiveItems(currentActiveItems => ({
      ...currentActiveItems,
      [itemId]: !currentActiveItems[itemId],
    }));
  };

  const itemsContent = [
    {
      id: 'item-1',
      title: '국회의원은 왜 있어야 하고 무엇을 하나요?',
      content: (
        <div className={S.ulWrapper}>
          국회의원은 국민을 대표하여 법을 제정하고 수정하는 입법활동을 수행하며, 정부의 활동을 감시하고 균형을 유지하는
          역할을 합니다. 이를 통해 국가의 민주주의를 보장하고 국가의 안정과 발전을 촉진합니다.
        </div>
      ),
    },
    {
      id: 'item-2',
      title: '법은 어떤 과정으로 만들어지나요',
      content: (
        <div className={S.ulWrapper}>
          <ul>
            <li>발의</li>
            <li>
              법안의 제안자는 국회의원, 정부, 시민단체 등 다양할 수 있습니다. 법안의 발의자는 법안의 내용을 국회에
              제출합니다.
            </li>
          </ul>
          <ul>
            <li>상임위원회</li>
            <li>
              법안은 해당 분야의 상임위원회에서 심사를 받습니다. 상임위원회는 법안의 내용을 검토하고 필요에 따라
              수정하여 전체 의회에 상정할 수 있습니다.
            </li>
          </ul>
          <ul>
            <li>본회의</li>
            <li>본회의에서는 법안을 토론하고 수정하며, 최종적으로 투표를 통해 법안을 채택하거나 기각합니다.</li>
          </ul>
          <ul>
            <li>대통령의 서명</li>
            <li>
              국회에서 통과된 법안은 대통령의 서명을 거쳐 공포됩니다. 대통령은 법안이 헌법과 법률에 부합하는지 검토한 후
              서명하거나 거부할 수 있습니다.
            </li>
          </ul>
          <ul>
            <li>공포 및 공포일</li>
            <li>
              대통령의 서명을 거친 법률은 공포되어 국가 공보에 게시됩니다. 이후 법률이 발효되는 날을 공포일이라고
              합니다.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'item-3',
      title: '법이 통과하기 위해서는 필요한 찬성표는 어느 정도 되나요?',
      content: (
        <div className={S.ulWrapper}>
          <ul>
            <li>가결(可決)은 법안이나 안건이 통과되는 과정을 말합니다.</li>
            <li>국회의 경우에는 가결에 필요한 찬성표의 수는 다음과 같이 결정됩니다</li>
          </ul>
          <ul>
            <li>
              1. 상임위원회: 상임위원회에서 법안이나 안건을 심의할 때는 상임위원회 구성원의 과반수(50% 이상)의 찬성이
              필요합니다. 상임위에서 법안이 가결되면 본회의로 상정됩니다.
            </li>
            <li>
              2. 본회의: 본회의에서 법안이나 안건을 심의할 때는 출석의원 과반수의 찬성이 필요합니다. 이 경우 국회의 전체
              의원 중 과반수의 찬성이 필요합니다.
            </li>
          </ul>
          <ul>
            <li>
              따라서 법안이나 안건이 가결되기 위해서는 해당 단계에서 정해진 규정에 따라 필요한 찬성표를 확보해야 합니다.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'item-4',
      title: '선거 종류가 많은데 누굴 뽑고, 몇년마다 하나요?',
      content: (
        <div className={S.ulWrapper}>
          <ul>
            <li>국회읜원 선거</li>
            <li>
              대한민국에서는 국회의원을 선출하는 총선(총선거)이 있습니다. 국회의원 선거는 보통 4년마다 실시되며, 국회의
              구성원을 결정합니다.
            </li>
          </ul>
          <ul>
            <li>대통령 선거</li>
            <li>
              대한민국에서는 대통령을 선출하는 대통령 선거가 있습니다. 대통령 선거는 보통 5년마다 실시되며, 대한민국
              대통령을 선출합니다.
            </li>
          </ul>
          <ul>
            <li>지방 선거</li>
            <li>
              대한민국의 지방자치단체(시, 군, 구)의 장인 시장, 도지사, 구청장, 군청장 등을 선출하는 지방 선거가
              있습니다. 지방 선거는 국회의원 선거와 대통령 선거의 중간 연도에 실시되기도 하며, 주기는 일반적으로
              4년입니다.
            </li>
          </ul>
          <ul>
            <li>보궐 선거</li>
            <li>
              집행기관의 특정 직위가 비어있을 때 당선자를 선출하기 위해 실시됩니다. 이러한 보궐 선거의 주기는 특정한
              사건이 발생할 때마다 다를 수 있습니다.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'item-5',
      title: '국회의원, 시장(도지사), 구청장, 군청장 서로 직위의 높고 낮음이 어떻게 되고 어떤 일을 하나요?',
      content: (
        <div className={S.ulWrapper}>
          <ul>
            <li>
              국회의원, 시장, 도지사, 구청장, 군청장은 각각 다른 범위와 책임을 갖는 공직이지만, 일반적으로 권한과 영향력
              면에서는 다음과 같이 순서가 매겨집니다
            </li>
          </ul>
          <ul>
            <dt>1. 국회의원</dt>
            <dd>
              국가를 대표하는 국민의 대표로서 국회에서 법률을 제정하고 예산을 심의하는 등 국가의 핵심 역할을 담당합니다.
            </dd>
            <dt>2. 시장(도지사)</dt>
            <dd>
              시 또는 도의 행정을 총괄하는 지방정부의 수장입니다. 시장은 해당 지역의 행정, 경제, 안전, 문화 등 다양한
              분야에 대한 책임을 갖고 있습니다. 도지사는 시장과 비슷한 역할을 하지만, 광역지방자치단체인 도의
              수장입니다.
            </dd>
            <dt>3. 군청장</dt>
            <dd>
              군의 행정을 총괄하는 지방정부의 수장으로서, 군민의 복지와 안전을 책임집니다. 시장과 도지사에 비해 권한이
              상대적으로 적을 수 있습니다.
            </dd>
            <dt>4. 구청장</dt>
            <dd>
              구의 행정을 총괄하는 지방정부의 수장으로서, 해당 구의 행정, 경제, 문화 등 다양한 분야에 대한 책임을 갖고
              있습니다. 권한이 상대적으로 가장 낮은 수준에 해당합니다.
            </dd>
          </ul>
          <ul>
            <li>
              이러한 순서는 주권의 재귀성, 즉 권한이 출처인 국민으로부터 차례로 위임되는 구조를 반영합니다. 따라서
              국회의원이 가장 높은 권한을 갖고 있으며, 그 다음으로 시장(도지사), 군청장, 구청장이 위치합니다.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className={S.introWrapper}>
      <div className={S.introTitle}>
        <div>
          <p>여의도 입문서</p>
        </div>
        <div style={{ padding: 5 }}>
          <HelpCircle></HelpCircle>
        </div>
      </div>

      {itemsContent.map(item => (
        <div
          key={item.id}
          className={S.item}
          style={assignInlineVars({
            [S.panelHeight]: activeItems[item.id] ? '100vh' : '0',
          })}
          onClick={() => toggleAccordion(item.id)}
        >
          <div className={S.itemTitle}>
            <ArrowBlack></ArrowBlack>
            <div style={{ fontWeight: 'bold' }}>{item.title}</div>
          </div>
          <div className={S.itemContent}>{item.content}</div>
        </div>
      ))}
    </div>
  );
}
