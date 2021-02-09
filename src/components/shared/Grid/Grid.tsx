import { ReactElement } from 'react';

type Props = {
  children: ReactElement | ReactElement[];
};

const Grid = ({ children }: Props): ReactElement => {
  return <div className="grid w-full grid-cols-3 gap-4 gap-y-8">{children}</div>;
};

export default Grid;
