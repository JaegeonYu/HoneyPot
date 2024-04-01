import React, { Suspense } from 'react';

export default function VideoNewsLayout({
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
