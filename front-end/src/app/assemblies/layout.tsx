import React, { Suspense } from 'react';

export default function AssembliesLayout({
  children,
  UserInteractionSection,
}: {
  children: React.ReactNode;
  UserInteractionSection: React.ReactNode;
}) {
  return (
    <Suspense>
      {UserInteractionSection}
      {children}
    </Suspense>
  );
}
