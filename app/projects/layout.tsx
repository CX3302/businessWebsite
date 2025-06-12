'use client';

import Navigation from '../components/Navigation';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
} 