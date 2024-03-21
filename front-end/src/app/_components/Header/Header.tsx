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
            <Link href="/assembly-list">
              <li className={S.dropBoxItem}>국회의원</li>
            </Link>
            <Link href="/parties">
              <li className={S.dropBoxItem}>정당</li>
            </Link>
          </ul>
        </div>
        <div className={S.navTitle}>
          <span className={S.title}>의안</span>
          <ul className={S.dropBox}>
            <Link href="/hot-issues">
              <li className={S.dropBoxItem}>핫이슈</li>
            </Link>
            <Link href="/bills">
              21대 <li className={S.dropBoxItem}>의안</li>
            </Link>
          </ul>
        </div>
        <div className={S.navTitle}>
          <span className={S.title}>22대 총선</span>
          <ul className={S.dropBox}>
            <Link href="/candidates">
              후보자 <li className={S.dropBoxItem}>확인</li>
            </Link>
            <Link href="/polling-places">
              투표소 <li className={S.dropBoxItem}>확인</li>
            </Link>
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
