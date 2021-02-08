import React, { ReactElement } from 'react';
import CountUp from 'react-countup';

const CharCounter = ({ total, text, suffix }: { total: number; text: string; suffix?: string }): ReactElement => {
  return (
    <div className="flex flex-wrap flex-col justify-center">
      <div className="m-auto">
        <CountUp
          start={0}
          end={total}
          decimals={Number.isInteger(total) ? 0 : 1}
          decimal="."
          className="text-5xl text-green-400 font-black tracking-tight text-shadow-xl text-center"
          suffix={suffix}
        />
      </div>
      <div className="w-24 mt-4">
        <div
          dangerouslySetInnerHTML={{ __html: `<p>${text}</p>` }}
          className="text-white font-thin text-center text-shadow-sm leading-tight"
        />
      </div>
    </div>
  );
};

export default CharCounter;
