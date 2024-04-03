import React, { Suspense } from 'react';

export default function CandidatesLayout({
  UserInteractionSection,
  children,
}: {
  UserInteractionSection: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      {UserInteractionSection}
      {children}
    </Suspense>
  );
}
