import React, { ReactElement } from 'react';
import CharCounter from '../CharCounter';

type CharCounter = {
  total: number;
  text: string;
  suffix?: string;
};

type Props = {
  counters: CharCounter[];
};

const CharacterCounter = ({ counters }: Props): ReactElement => {
  return (
    <div className="w-full flex items-start justify-center -space-x-1 md:space-x-6 lg:space-x-12">
      {counters.map((charCounter, index) => (
        <CharCounter key={index} total={charCounter.total} text={charCounter.text} suffix={charCounter.suffix} />
      ))}
    </div>
  );
};

export default CharacterCounter;
