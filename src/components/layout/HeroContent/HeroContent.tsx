import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement | ReactElement[];
};

const HeroContent = ({ children }: Props): ReactElement => {
  return (
    <div className="flex items-center h-screen -mt-20 lg:h-auto lg:mt-32">
      <div className="container mx-auto flex flex-wrap flex-col lg:flex-row items-center">
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
