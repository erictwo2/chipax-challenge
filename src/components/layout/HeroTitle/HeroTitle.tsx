import { ReactElement } from 'react';

const HeroTitle = ({ title }: { title: string }): ReactElement => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: `${title}` }}
      className="text-8xl text-white font-black tracking-tight text-shadow-xl"
    />
  );
};

export default HeroTitle;
