import { getSequentialArray } from '@app/utils/arrayUtils';
import { countCharacters } from '@app/utils/stringUtils';
import { request, gql } from 'graphql-request';

export type CharCounter = {
  total: number;
  text: string;
  suffix?: string;
};

type Origin = {
  name: string;
};

export type Episode = {
  name: string;
  season: number;
  episode: number;
  originsOfCharacters: Origin[];
};

type ApiLocation = {
  name: string;
};

type ApiEpisode = {
  name: string;
};

type ApiCharacter = {
  name: string;
};

type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type LocationsFilterByNameData = {
  locations: {
    info: Info;
    results: ApiLocation[];
  };
};

type EpisodesFilterByNameData = {
  episodes: {
    info: Info;
    results: ApiEpisode[];
  };
};

type CharactersFilterByNameData = {
  characters: {
    info: Info;
    results: ApiCharacter[];
  };
};

const locationsFilterByNameQuery = gql`
  query($page: Int!, $name: String!) {
    locations(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
      }
      results {
        name
      }
    }
  }
`;

const episodesFilterByNameQuery = gql`
  query($page: Int!, $name: String!) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
      }
      results {
        name
      }
    }
  }
`;

const charactersFilterByNameQuery = gql`
  query($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
      }
      results {
        name
      }
    }
  }
`;

export const getAllLocationNamesWithCharL = async (): Promise<string[]> => {
  const char = 'l';
  const dataOfFirstPage = await request<LocationsFilterByNameData>(process.env.API_URL, locationsFilterByNameQuery, {
    page: 1,
    name: char
  });

  const remainingPages = getSequentialArray(2, dataOfFirstPage.locations.info.pages);
  const dataOfRemainingPages = await Promise.all(
    remainingPages.map((page) => {
      return request<LocationsFilterByNameData>(process.env.API_URL, locationsFilterByNameQuery, {
        page: page,
        name: char
      });
    })
  );

  const namesOfFirstPage = dataOfFirstPage.locations.results.map((location) => location.name);
  const namesOfRemainingPages = dataOfRemainingPages
    .map((data) => data.locations.results)
    .flatMap((location) => location.map((location) => location.name));

  return namesOfFirstPage.concat(namesOfRemainingPages);
};

export const getAllEpisodeNamesWithCharE = async (): Promise<string[]> => {
  const char = 'e';
  const dataOfFirstPage = await request<EpisodesFilterByNameData>(process.env.API_URL, episodesFilterByNameQuery, {
    page: 1,
    name: char
  });

  const remainingPages = getSequentialArray(2, dataOfFirstPage.episodes.info.pages);
  const dataOfRemainingPages = await Promise.all(
    remainingPages.map((page) => {
      return request<EpisodesFilterByNameData>(process.env.API_URL, episodesFilterByNameQuery, {
        page: page,
        name: char
      });
    })
  );

  const namesOfFirstPage = dataOfFirstPage.episodes.results.map((episode) => episode.name);
  const namesOfRemainingPages = dataOfRemainingPages
    .map((data) => data.episodes.results)
    .flatMap((episode) => episode.map((episode) => episode.name));

  return namesOfFirstPage.concat(namesOfRemainingPages);
};

export const getAllCharacterNamesWithCharC = async (): Promise<string[]> => {
  const char = 'c';
  const dataOfFirstPage = await request<CharactersFilterByNameData>(process.env.API_URL, charactersFilterByNameQuery, {
    page: 1,
    name: char
  });

  const remainingPages = getSequentialArray(2, dataOfFirstPage.characters.info.pages);
  const dataOfRemainingPages = await Promise.all(
    remainingPages.map((page) => {
      return request<CharactersFilterByNameData>(process.env.API_URL, charactersFilterByNameQuery, {
        page: page,
        name: char
      });
    })
  );

  const namesOfFirstPage = dataOfFirstPage.characters.results.map((character) => character.name);
  const namesOfRemainingPages = dataOfRemainingPages
    .map((data) => data.characters.results)
    .flatMap((character) => character.map((character) => character.name));

  return namesOfFirstPage.concat(namesOfRemainingPages);
};

export const getCharCounters = async (): Promise<CharCounter[]> => {
  const start = new Date();

  const [locationNames, episodeNames, characterNames] = await Promise.all([
    getAllLocationNamesWithCharL(),
    getAllEpisodeNamesWithCharE(),
    getAllCharacterNamesWithCharC()
  ]);

  const totalCharacterL = countCharacters(locationNames, 'l');
  const totalCharacterE = countCharacters(episodeNames, 'e');
  const totalCharacterC = countCharacters(characterNames, 'c');

  const end = new Date();
  const totalTime = (end.getTime() - start.getTime()) / 1000;

  return [
    {
      total: totalCharacterL,
      text: "Total of <b>L's</b> in the names of all locations"
    },
    {
      total: totalCharacterE,
      text: "Total of <b>E's</b> in the names of all episodes"
    },
    {
      total: totalCharacterC,
      text: "Total of <b>C's</b> in the names of all characters"
    },
    {
      total: totalTime,
      text: 'Total time',
      suffix: 's'
    }
  ];
};

export const getEpisodes = async (): Promise<Episode[]> => {
  return [
    {
      name: 'Pilot',
      season: 1,
      episode: 1,
      originsOfCharacters: [
        {
          name: 'unknown'
        },
        {
          name: 'Signus 5 Expanse'
        },
        {
          name: 'Post-Apocalyptic Earth'
        }
      ]
    },
    {
      name: 'Close Rick-counters of the Rick Kind',
      season: 1,
      episode: 2,
      originsOfCharacters: [
        {
          name: 'unknown'
        },
        {
          name: 'Signus 5 Expanse'
        }
      ]
    },
    {
      name: 'The Rickshank Rickdemption',
      season: 1,
      episode: 3,
      originsOfCharacters: [
        {
          name: 'Purge Planet'
        },
        {
          name: 'Venzenulon 7'
        },
        {
          name: 'Bepis 9'
        },
        {
          name: 'Beta-Seven'
        },
        {
          name: 'Earth (C-500A)'
        }
      ]
    }
  ];
};
