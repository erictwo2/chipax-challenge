import { ReactElement } from 'react';

const Hero = ({ children }: { children: ReactElement | ReactElement[] }): ReactElement => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.7)), url(/rick-and-morty-in-dragon-ball-wallpaper.jpg)`
      }}>
      {children}
    </div>
  );
};

export default Hero;
