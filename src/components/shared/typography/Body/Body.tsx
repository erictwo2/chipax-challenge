import { ReactElement } from 'react';

type Props = {
  text: string;
};

const Body1 = ({ text }: Props): ReactElement => {
  return <div dangerouslySetInnerHTML={{ __html: `${text}` }} className="text-gray-800 text-base" />;
};

export { Body1 };
