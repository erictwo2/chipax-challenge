import { ReactElement } from 'react';

type Props = {
  href: string;
  children: ReactElement | ReactElement[];
};

const NavbarLink = ({ href, children }: Props): ReactElement => {
  return (
    <li>
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
