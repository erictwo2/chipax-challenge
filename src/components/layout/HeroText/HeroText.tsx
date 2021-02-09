import { ReactElement } from 'react';
import useTypewriter from 'react-typewriter-hook/build/useTypewriter';

const HeroText = ({ text }: { text: string }): ReactElement => {
  const textWritter = useTypewriter(text);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: `${textWritter}` }}
      className="text-xl text-white font-light text-shadow-md mt-6 mb-6 pl-2 ml-1 border-l-4 border-red-600 h-8"
    />
  );
};

export default HeroText;
