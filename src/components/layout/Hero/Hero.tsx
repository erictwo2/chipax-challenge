import { ReactElement } from 'react';

type Props = {
  children: ReactElement | ReactElement[];
};

const Hero = ({ children }: Props): ReactElement => {
  return (
    <div className="bg-cover bg-center lg:bg-right h-screen w-screen bg-image">
      {children}
    </div>
  );
};

export default Hero;
