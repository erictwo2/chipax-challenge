import React, { ReactElement } from 'react';
import CountUp from 'react-countup';

type Props = {
  total: number;
  text: string;
  suffix?: string;
};

const CharCounter = ({ total, text, suffix }: Props): ReactElement => {
  return (
    <div className="flex flex-col">
      <CountUp
        data-testid="char-counter-total"
        start={0}
        end={total}
        decimals={Number.isInteger(total) ? 0 : 1}
        decimal="."
        className="text-4xl md:text-5xl text-green-500 font-black tracking-tight text-shadow-xl text-center"
        suffix={suffix}
      />
      <div data-testid="char-counter-description" className="w-24 mt-4">
        <div
          dangerouslySetInnerHTML={{ __html: `<p>${text}</p>` }}
          className="text-sm md:text-base text-white font-thin text-center text-shadow-sm leading-tight"
        />
      </div>
    </div>
  );
};

export default CharCounter;
