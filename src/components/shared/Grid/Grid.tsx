import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement | ReactElement[];
};

const Grid = ({ children }: Props): ReactElement => {
  return <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">{children}</div>;
};

export default Grid;
