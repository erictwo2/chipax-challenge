import { ReactElement } from 'react';
import useTypewriter from 'react-typewriter-hook/build/useTypewriter';

type Props = {
  text: string;
};

const HeroText = ({ text }: Props): ReactElement => {
  const textWritter = useTypewriter(text);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: `${text}` }}
      className="text-xl text-white font-light text-shadow-md my-10 md:my-6 pl-2 ml-1 border-l-none md:border-l-4 md:border-red-400 h-8"
    />
  );
};

export default HeroText;
