import React from 'react';

export default function PageTitle({as = "h1", ...props}) {
  const Title = as;
  return (
      <Title>{props.title}</Title>
  );
}