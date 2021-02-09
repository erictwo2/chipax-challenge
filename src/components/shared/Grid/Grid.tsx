import { ReactElement } from 'react';

type Props = {
  children: ReactElement | ReactElement[];
};

const Grid = ({ children }: Props): ReactElement => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
};

export default Grid;
