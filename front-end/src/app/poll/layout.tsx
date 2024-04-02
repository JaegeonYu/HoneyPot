import React, { Suspense } from 'react';

export default function PollLayout({
  UserInteractionSection,
  children,
}: {
  UserInteractionSection: React.ReactNode;
  children: React.ReactNode;
}) {
  //   return <Suspense>{children}</Suspense>;
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30 }}>
        <div style={{ fontSize: 38, fontWeight: 700, textAlign: 'center' }}>우리 지역 투표소를 찾아보세요</div>
        {/* <div style={{ fontSize: 18, fontWeight: 400, textAlign: 'center', marginTop: '-30px' }}>
          시군구 단위부터 확인할 수 있어요.
        </div> */}
        <Suspense>{UserInteractionSection}</Suspense>
        {children}
      </div>
    </>
  );
}
