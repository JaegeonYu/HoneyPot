import * as S from './PolyCard.css';
import * as Comp from '@/components';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';

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
    <Link
      className={S.styledLink}
      href={`/party/${polyId}`}
      onClick={() => sendGAEvent({ event: 'buttonClicked', value: `${polyId}클릭` })}
    >
      <Comp.Card ratio="2 / 1" badge={{ isBadgeNeed: false }} imgUrl={`/party/party-${polyId}.svg`}>
        {/* <div className={S.cardInfoSection}>
          <div className={S.partyCntWrapper}>
            <span className={S.partySeat}>{polySeatsResponse.seats} 명</span>
            <span className={S.totalSeat}> / {polySeatsResponse.totalSeats} 명</span>
          </div>
          <div className={S.leaderName}>당대표 : {leader}</div>
        </div> */}
        <></>
      </Comp.Card>
    </Link>
  );
}
