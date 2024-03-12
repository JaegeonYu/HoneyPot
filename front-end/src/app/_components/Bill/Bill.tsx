import React, { useState } from 'react';
import * as S from './Bill.css';

export default function Bill() {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button className={isActive ? S.accordion : S.accordion} onClick={toggleAccordion}>
        <p className={S.fontName}>Lorem</p>
        <div className={S.panel}>
          <p className={S.fontName}>Lorem</p>
        </div>
      </button>
    </div>
  );
}
