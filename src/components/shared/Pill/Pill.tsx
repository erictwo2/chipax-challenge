import { ReactElement } from 'react';

type Props = {
  text: string;
};

const Pill = ({ text }: Props): ReactElement => {
  return (
    <div className="bg-green-400 w-auto shadow-lg text-white text-sm capitalize mr-2 mb-2 py-2 px-3 rounded-full whitespace-nowrap">
      {text}
    </div>
  );
};

export default Pill;
