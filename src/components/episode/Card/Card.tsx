import Pill from '@app/components/shared/Pill';
import { Body1 } from '@app/components/shared/typography/Body';
import { Title2, Title3 } from '@app/components/shared/typography/Titles';
import React, { ReactElement } from 'react';

type Origin = {
  name: string;
};

type Episode = {
  name: string;
  season: number;
  episode: number;
  originsOfCharacters: Origin[];
};

type Props = {
  episode: Episode;
};

const Card = ({ episode }: Props): ReactElement => {
  return (
    <div className="p-6 rounded-xl border border-gray-200 shadow-xl">
      <div className="w-full mb-4">
        <Title2 text={episode.name} />
      </div>
      <div className="w-full -mt-4 mb-4">
        <Title3 text={`Season ${episode.season} - Episode ${episode.episode}`} />
      </div>
      <p className="mb-5">
        <Body1 text={`Number of character locations: ${episode.originsOfCharacters.length}`} />
      </p>
      <div className="flex flex-wrap">
        {episode.originsOfCharacters.map((origin, index) => (
          <Pill key={index} text={origin.name} />
        ))}
      </div>
    </div>
  );
};

export default Card;
