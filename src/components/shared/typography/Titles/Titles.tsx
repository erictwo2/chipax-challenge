import { ReactElement } from 'react';

type Props = {
  text: string;
};

const Title1 = ({ text }: Props): ReactElement => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: `${text}` }}
      className="text-5xl font-bold leading-tight text-gray-800 truncate"
    />
  );
};

const Title2 = ({ text }: Props): ReactElement => {
  return <div dangerouslySetInnerHTML={{ __html: `${text}` }} className="font-bold text-xl text-gray-800 truncate" />;
};

const Title3 = ({ text }: Props): ReactElement => {
  return <div dangerouslySetInnerHTML={{ __html: `${text}` }} className="font-medium text-gray-500 truncate" />;
};

export { Title1, Title2, Title3 };
