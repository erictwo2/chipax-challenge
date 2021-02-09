import Github from '@app/components/shared/icons/Github';
import Linkedin from '@app/components/shared/icons/Linkedin';
import { ReactElement } from 'react';
import NavbarLink from '../NavbarLink';

const Navbar = (): ReactElement => {
  return (
    <nav className="w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-6">
        <div className="flex items-center">
          <a>
            <img src={'/logo.png'} />
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
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
