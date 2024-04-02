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
      <Suspense>{UserInteractionSection}</Suspense>
      {children}
    </>
  );
}
