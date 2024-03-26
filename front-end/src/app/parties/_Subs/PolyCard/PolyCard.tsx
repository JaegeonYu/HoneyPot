import * as S from './PolyCard.css';
import * as Comp from '@/components';
import Link from 'next/link';

interface PolyCardProps {
  polyId: number;
  seats: number;
  leader: string;
}

export default function PolyCard({ polyId, leader, seats }: PolyCardProps) {
  return (
    <Link className={S.styledLink} href={`/poly-detail/${polyId}`}>
      <Comp.Card ratio="1 / 1" badge={{ isBadgeNeed: false }} imgUrl={`/party/party-${polyId}.svg`}>
        <div className={S.cardInfoSection}>
          <div className={S.partyCntWrapper}>
            <span className={S.partySeat}>{seats} 명</span>
            <span className={S.totalSeat}> / 297 명</span>
          </div>
          <div className={S.leaderName}>당대표 : {leader}</div>
        </div>
      </Comp.Card>
    </Link>
  );
}
