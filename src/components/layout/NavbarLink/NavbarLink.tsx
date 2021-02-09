import { ReactElement } from 'react';

const NavbarLink = ({ href, children }: { href: string; children: ReactElement | ReactElement[] }): ReactElement => {
  return (
    <li className="mr-3">
      <a
        className="inline-block text-white hover:text-gray-200 hover:text-underline py-2 px-4"
        href={href}
        rel="noopener noreferrer"
        target="_blank">
        {children}
      </a>
    </li>
  );
};

export default NavbarLink;
