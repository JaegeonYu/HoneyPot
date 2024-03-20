import React from 'react';
import Link from 'next/link';
import * as S from './Header.css';
import Image from 'next/image';

function Header() {
  return (
    <header className={S.headerContainer}>
      <Link href="/">
        <Image src={'/yeouido-honeypot-logo.png'} width={52} height={50} alt="여의도 꿀통 로고" />
      </Link>
      <nav className={S.navWrapper}>
        <div className={S.navTitle}>
          <span className={S.title}>21대 국회</span>
          <ul className={S.dropBox}>
            <li className={S.dropBoxItem}>
              <Link href="/assembly-list">국회의원</Link>
            </li>
            <li className={S.dropBoxItem}>
              <Link href="/parties">정당</Link>
            </li>
          </ul>
        </div>
        <div className={S.navTitle}>
          <span className={S.title}>의안</span>
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
          <span className={S.title}>22대 총선</span>
          <ul className={S.dropBox}>
            <li className={S.dropBoxItem}>
              <Link href="/candidates">후보자 확인</Link>
            </li>
            <li className={S.dropBoxItem}>
              <Link href="/polling-places">투표소 확인</Link>
            </li>
          </ul>
        </div>
        <div className={S.navTitle}>
          <Link href="/candidates">
            <span className={S.title}>여의도 입문서</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
