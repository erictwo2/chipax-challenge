import { ReactElement } from 'react';

type Props = {
  title: string;
};

const HeroTitle = ({ title }: Props): ReactElement => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: `${title}` }}
      className="text-7xl md:text-8xl text-white font-black tracking-tight text-shadow-xl"
    />
  );
};

export default HeroTitle;
