import React from 'react';

const AppContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <main className='main'>{children}</main>;
};

export default AppContainer;
