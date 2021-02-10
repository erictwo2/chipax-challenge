import React, { ReactElement } from 'react';

type Props = {
  text: string;
};

const Body1 = ({ text }: Props): ReactElement => {
  return (
    <div data-testid="body1" dangerouslySetInnerHTML={{ __html: `${text}` }} className="text-gray-800 text-base" />
  );
};

export { Body1 };
