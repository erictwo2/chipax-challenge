import { getSequentialArray } from '@app/utils/arrayUtils';
import { countCharacters } from '@app/utils/stringUtils';
import { request, gql } from 'graphql-request';

export type CharCounter = {
  total: number;
  text: string;
  suffix?: string;
};

export type Episode = {
  name: string;
  season: number;
  episode: number;
  originsOfCharacters: string[];
};

export type Result<Data> = {
  data: Data;
  totalTime: number;
};

type ApiLocation = {
  id: string;
  name: string;
};

type ApiEpisode = {
  id: string;
  name: string;
  episode: string;
  characters: ApiCharacter[];
};

type ApiCharacter = {
  name: string;
  origin: ApiLocation;
};

type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type LocationsPage = {
  locations: {
    info: Info;
    results: ApiLocation[];
  };
};

type EpisodesPage = {
  episodes: {
    info: Info;
    results: ApiEpisode[];
  };
};

type CharactersPage = {
  characters: {
    info: Info;
    results: ApiCharacter[];
  };
};

export const locationsFilterByNameQuery = gql`
  query($page: Int!, $name: String!) {
    locations(page: $page, filter: { name: $name }) {
      info {
        pages
      }
      results {
        name
      }
    }
  }
`;

export const episodesFilterByNameQuery = gql`
  query($page: Int!, $name: String!) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        pages
      }
      results {
        name
      }
    }
  }
`;

export const charactersFilterByNameQuery = gql`
  query($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        pages
      }
      results {
        name
      }
    }
  }
`;

export const episodesQuery = gql`
  query($page: Int!) {
    episodes(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        episode
        characters {
          name
          origin {
            id
            name
          }
        }
      }
    }
  }
`;

export const getAllLocationNamesWithCharL = async (): Promise<string[]> => {
  const char = 'l';
  const dataOfFirstPage = await request<LocationsPage>(process.env.API_URL, locationsFilterByNameQuery, {
    page: 1,
    name: char
  });

  const remainingPages = getSequentialArray(2, dataOfFirstPage.locations.info.pages);
  const dataOfRemainingPages = await Promise.all(
    remainingPages.map((page) => {
      return request<LocationsPage>(process.env.API_URL, locationsFilterByNameQuery, {
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
  const dataOfFirstPage = await request<EpisodesPage>(process.env.API_URL, episodesFilterByNameQuery, {
    page: 1,
    name: char
  });

  const remainingPages = getSequentialArray(2, dataOfFirstPage.episodes.info.pages);
  const dataOfRemainingPages = await Promise.all(
    remainingPages.map((page) => {
      return request<EpisodesPage>(process.env.API_URL, episodesFilterByNameQuery, {
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
  const dataOfFirstPage = await request<CharactersPage>(process.env.API_URL, charactersFilterByNameQuery, {
    page: 1,
    name: char
  });

  const remainingPages = getSequentialArray(2, dataOfFirstPage.characters.info.pages);
  const dataOfRemainingPages = await Promise.all(
    remainingPages.map((page) => {
      return request<CharactersPage>(process.env.API_URL, charactersFilterByNameQuery, {
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

export const getAllEpisodes = async (): Promise<ApiEpisode[]> => {
  const dataOfFirstPage = await request<EpisodesPage>(process.env.API_URL, episodesQuery, { page: 1 });

  const remainingPages = getSequentialArray(2, dataOfFirstPage.episodes.info.pages);
  const dataOfRemainingPages = await Promise.all(
    remainingPages.map((page) => {
      return request<EpisodesPage>(process.env.API_URL, episodesQuery, { page: page });
    })
  );

  const episodesOfFirstPage = dataOfFirstPage.episodes.results.map((episode) => episode);
  const episodesOfRemainingPages = dataOfRemainingPages
    .map((data) => data.episodes.results)
    .flatMap((episode) => episode.map((episode) => episode));

  return episodesOfFirstPage.concat(episodesOfRemainingPages);
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

export const getEpisodesLocations = async (): Promise<Result<Episode[]>> => {
  const start = new Date();

  const apiEpisodes = await getAllEpisodes();

  const episodes: Episode[] = apiEpisodes.map((apiEpisode) => {
    const origins = apiEpisode.characters.map((character) => character.origin.name);

    const existing = {};
    const originsWithoutDuplicates = [];
    origins.forEach((origin) => {
      if (!existing[origin]) {
        originsWithoutDuplicates.push(origin);
        existing[origin] = true;
      }
    });

    const season = parseInt(apiEpisode.episode.match(/S(.*)E/)[1]);
    const episode = parseInt(apiEpisode.episode.match(/E(.*)$/)[1]);

    return {
      name: apiEpisode.name,
      season: season,
      episode: episode,
      originsOfCharacters: originsWithoutDuplicates
    };
  });

  const end = new Date();
  const totalTime = (end.getTime() - start.getTime()) / 1000;

  return {
    data: episodes,
    totalTime: totalTime
  };
};
