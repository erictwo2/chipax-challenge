import { ReactElement } from 'react';

type Props = {
  label: string;
  href: string;
};

const ButtonLink = ({ label, href }: Props): ReactElement => {
  return (
    <a
      className="rounded-full shadow-lg bg-red-400 hover:bg-red-500 py-4 px-6 text-white text-xl"
      href={href}
      rel="noopener noreferrer"
      target="_blank">
      {label}
    </a>
  );
};

export default ButtonLink;
