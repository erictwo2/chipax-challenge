import React, { ReactElement } from 'react';

const CharCounter = ({ total, text }: { total: string; text: string }): ReactElement => {
  return (
    <div className="flex flex-wrap flex-col justify-center">
      <div className="m-auto">
        <p className="text-5xl text-green-400 font-black tracking-tight text-shadow-xl text-center">{total}</p>
      </div>
      <div className="w-24 mt-4">
        <p className="text-white font-thin text-center text-shadow-sm leading-tight">{text}</p>
      </div>
    </div>
  );
};

export default CharCounter;
