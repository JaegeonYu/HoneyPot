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
      <nav>
        <ul className={S.nav}>
          <li className={S.navItem}>
            <div>21대 국회</div>
            <ul className={S.subMenu}>
              <li className={S.subMenuItem}>
                <Link href="/congressman">국회의원</Link>
              </li>
              <li className={S.subMenuItem}>
                <Link href="/parties">정당</Link>
              </li>
            </ul>
          </li>
          <li className={S.navItem}>
            <div>의안</div>
            <ul className={S.subMenu}>
              <li className={S.subMenuItem}>
                <Link href="/hot-issues">핫이슈</Link>
              </li>
              <li className={S.subMenuItem}>
                <Link href="/bills">21대 의안</Link>
              </li>
            </ul>
          </li>
          <li className={S.navItem}>
            <div>22대 총선</div>
            <ul className={S.subMenu}>
              <li className={S.subMenuItem}>
                <Link href="/candidates">후보자 확인</Link>
              </li>
              <li className={S.subMenuItem}>
                <Link href="/polling-places">투표소 확인</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
