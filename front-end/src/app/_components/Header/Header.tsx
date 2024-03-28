import React from 'react';
import Link from 'next/link';
import * as S from './Header.css';
import Image from 'next/image';

function Header() {
  return (
    <header className={S.headerContainer}>
      <Link href="/">
        <Image src={'/yeouido-honeypot-logo.png'} width={68} height={66} alt="여의도 꿀통 로고" />
      </Link>
      <nav className={S.navWrapper}>
        <div className={S.navTitle}>
          <span className={S.title}>21대 국회</span>
          <ul className={S.dropBox}>
            <Link href="/assemblies">
              <li className={S.dropBoxItem}>국회의원</li>
            </Link>
            <Link href="/parties">
              <li className={S.dropBoxItem}>정당</li>
            </Link>
            <Link href="/bills">
              <li className={S.dropBoxItem}>법안</li>
            </Link>
          </ul>
        </div>
        <div className={S.navTitle}>
          <span className={S.title}>22대 총선</span>
          <ul className={S.dropBox}>
            <Link href="/candidates">
              <li className={S.dropBoxItem}>후보자 확인</li>
            </Link>
            <Link href="/polling-places">
              <li className={S.dropBoxItem}>투표소 확인</li>
            </Link>
          </ul>
        </div>
        <div className={S.navTitle}>
          <Link href="/introdution">
            <span className={S.title}>여의도 입문서</span>
          </Link>
        </div>
        <div className={S.navTitle}>
          <Link href="/video-news">
            <span className={S.title}>뉴스</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
