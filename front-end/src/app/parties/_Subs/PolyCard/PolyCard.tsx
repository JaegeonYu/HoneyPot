import * as S from './PolyCard.css';
import * as Comp from '@/components';
import Link from 'next/link';
import { sendGTMEvent } from '@next/third-parties/google';

interface PolyCardProps {
  polyId: number;
  polySeatsResponse: {
    seats: number;
    totalSeats: number;
  };
  leader: string;
}

export default function PolyCard({ polyId, leader, polySeatsResponse }: PolyCardProps) {
  return (
<<<<<<< HEAD
    <Link
      className={S.styledLink}
      href={`/poly-detail/${polyId}`}
      onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'aaaa' })}
    >
=======
    <Link className={S.styledLink} href={`/party/${polyId}`}>
>>>>>>> a43f313e89cb3e109531dc7cff6633c527c8fbd5
      <Comp.Card ratio="1 / 1" badge={{ isBadgeNeed: false }} imgUrl={`/party/party-${polyId}.svg`}>
        <div className={S.cardInfoSection}>
          <div className={S.partyCntWrapper}>
            <span className={S.partySeat}>{polySeatsResponse.seats} 명</span>
            <span className={S.totalSeat}> / {polySeatsResponse.totalSeats} 명</span>
          </div>
          <div className={S.leaderName}>당대표 : {leader}</div>
        </div>
        <></>
      </Comp.Card>
    </Link>
  );
}
