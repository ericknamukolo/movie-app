import React from 'react';

export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className='main'>{children}</main>;
}
