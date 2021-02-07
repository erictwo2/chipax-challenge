import React, { ReactElement } from 'react';
import CharCounter from '../CharCounter';

type CharCounter = {
  total: string;
  text: string;
};

const CharacterCounter = ({ counters }: { counters: CharCounter[] }): ReactElement => {
  return (
    <div className="flex flex items-start space-x-12">
      {counters &&
        counters.map((charCounter, index) => (
          <CharCounter key={index} total={charCounter.total} text={charCounter.text} />
        ))}
    </div>
  );
};

export default CharacterCounter;
