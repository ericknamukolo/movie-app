import React from 'react';

export default function Loader({ title }: { title: string }) {
  return <p className='loader'>{title}...</p>;
}
