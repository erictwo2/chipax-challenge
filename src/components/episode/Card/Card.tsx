import Pill from '@app/components/shared/Pill';
import { Body1 } from '@app/components/shared/typography/Body';
import { Title2, Title3 } from '@app/components/shared/typography/Titles';
import React, { ReactElement } from 'react';

type Episode = {
  name: string;
  season: number;
  episode: number;
  originsOfCharacters: string[];
};

type Props = {
  episode: Episode;
};

const Card = ({ episode }: Props): ReactElement => {
  return (
    <div className="p-6 rounded-xl border border-gray-200 shadow-lg" data-aos="fade-up">
      <div className="mb-4">
        <Title2 data-testid="episode-name" text={episode.name} />
      </div>
      <div className="-mt-4 mb-4">
        <Title3 data-testid="episode-description" text={`Season ${episode.season} - Episode ${episode.episode}`} />
      </div>
      <div className="mb-5">
        <Body1
          data-testid="number-character-locations"
          text={`Number of character locations: ${episode.originsOfCharacters.length}`}
        />
      </div>
      <div className="flex flex-wrap">
        {episode.originsOfCharacters.map((origin, index) => (
          <Pill data-testid={`character-origin-${index}`} key={index} text={origin} />
        ))}
      </div>
    </div>
  );
};

export default Card;
