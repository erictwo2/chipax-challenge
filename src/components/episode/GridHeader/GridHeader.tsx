import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement | ReactElement[];
};

const GridHeader = ({ children }: Props): ReactElement => {
  return (
    <div className="px-6 md:container flex mx-auto pt-4" data-aos="fade-up">
      <div className="w-full my-12 flex justify-center items-center">{children}</div>
    </div>
  );
};

export default GridHeader;
