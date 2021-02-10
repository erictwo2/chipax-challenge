import Github from '@app/components/shared/icons/Github';
import Linkedin from '@app/components/shared/icons/Linkedin';
import { ReactElement } from 'react';
import NavbarLink from '../NavbarLink';

const Navbar = (): ReactElement => {
  return (
    <nav className="w-full z-30 top-0 text-white">
      <div className="w-full px-6 md:container md:mx-auto md:px-0 flex flex-wrap items-center justify-between mt-0 py-6">
        <div className="flex items-center">
          <img src={'/logo.png'} />
        </div>
        <div className="flex items-center w-auto mt-0 bg-transparent text-black p-0 z-20">
          <ul className="list-reset flex justify-end items-center">
            <NavbarLink href="https://www.linkedin.com/in/eric-hidalgo-72835b43">
              <Linkedin />
            </NavbarLink>
            <NavbarLink href="https://github.com/erictwo2/chipax-challenge">
              <Github />
            </NavbarLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
