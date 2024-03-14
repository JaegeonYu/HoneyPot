import React from 'react';
import Link from 'next/link';
import * as S from './Header.css';

function Header() {
  return (
    <header className={S.headerContainer}>
      <div className={S.logo}></div>
      <Link href="/">
        <p className={S.title}>여의도 꿀통</p>
      </Link>
      <nav className={S.navWrapper}>
        <div className={S.navTitle}>
          21대 국회
          <ul className={S.dropBox}>
            <li className={S.dropBoxItem}>
              <Link href="/congressman">국회의원</Link>
            </li>
            <li className={S.dropBoxItem}>
              <Link href="/parties">정당</Link>
            </li>
          </ul>
        </div>
        <div className={S.navTitle}>
          의안
          <ul className={S.dropBox}>
            <li className={S.dropBoxItem}>
              <Link href="/hot-issues">핫이슈</Link>
            </li>
            <li className={S.dropBoxItem}>
              <Link href="/bills">21대 의안</Link>
            </li>
          </ul>
        </div>
        <div className={S.navTitle}>
          22대 총선
          <ul className={S.dropBox}>
            <li className={S.dropBoxItem}>
              <Link href="/candidates">후보자 확인</Link>
            </li>
            <li className={S.dropBoxItem}>
              <Link href="/polling-places">투표소 확인</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
