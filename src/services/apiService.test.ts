import * as apiService from './apiService';
import * as stringUtils from '@app/utils/stringUtils';
import * as graphqlRequest from 'graphql-request';
import {
  charactersFilterByNameQuery,
  episodesFilterByNameQuery,
  episodesQuery,
  getAllCharacterNamesWithCharC,
  getAllEpisodeNamesWithCharE,
  getAllEpisodes,
  getAllLocationNamesWithCharL,
  getCharCounters,
  getEpisodesLocations,
  locationsFilterByNameQuery
} from './apiService';
import { when } from 'jest-when';

describe('Api Service', () => {
  test('All location names with L char should be obtained correctly when there are 1 page', async () => {
    const page1 = {
      locations: {
        info: {
          pages: 1
        },
        results: [
          {
            name: 'Citadel of Ricks'
          },
          {
            name: "Worldender's lair"
          },
          {
            name: 'Interdimensional Cable'
          },
          {
            name: 'Immortality Field Resort'
          },
          {
            name: 'Post-Apocalyptic Earth'
          }
        ]
      }
    };
    const mockRequest = jest.fn();
    when(mockRequest)
      .calledWith(process.env.API_URL, locationsFilterByNameQuery, { page: 1, name: 'l' })
      .mockReturnValue(page1);
    jest.spyOn(graphqlRequest, 'request').mockImplementation(mockRequest);

    const locationNames = await getAllLocationNamesWithCharL();

    const locationNamesExpected = page1.locations.results.map((location) => location.name);
    expect(locationNames).toEqual(locationNamesExpected);
  });

  test('All location names with L char should be obtained correctly when there are 2 pages', async () => {
    const page1 = {
      locations: {
        info: {
          pages: 2
        },
        results: [
          {
            name: 'Citadel of Ricks'
          },
          {
            name: "Worldender's lair"
          },
          {
            name: 'Interdimensional Cable'
          },
          {
            name: 'Immortality Field Resort'
          },
          {
            name: 'Post-Apocalyptic Earth'
          }
        ]
      }
    };
    const page2 = {
      locations: {
        info: {
          pages: 2
        },
        results: [
          {
            name: 'Purge Planet'
          },
          {
            name: 'Venzenulon 7'
          },
          {
            name: 'Bird World'
          },
          {
            name: 'St. Gloopy Noops Hospital'
          },
          {
            name: "Mr. Goldenfold's dream"
          }
        ]
      }
    };
    const mockRequest = jest.fn();
    when(mockRequest)
      .calledWith(process.env.API_URL, locationsFilterByNameQuery, { page: 1, name: 'l' })
      .mockReturnValue(page1)
      .calledWith(process.env.API_URL, locationsFilterByNameQuery, { page: 2, name: 'l' })
      .mockReturnValue(page2);
    jest.spyOn(graphqlRequest, 'request').mockImplementation(mockRequest);

    const locationNames = await getAllLocationNamesWithCharL();

    const locationNamesExpected = page1.locations.results
      .concat(page2.locations.results)
      .map((location) => location.name);
    expect(locationNames).toEqual(locationNamesExpected);
  });

  test('All episodes names with E char should be obtained correctly when there are 1 page', async () => {
    const page1 = {
      episodes: {
        info: {
          pages: 1
        },
        results: [
          {
            name: 'Lawnmower Dog'
          },
          {
            name: 'M. Night Shaym-Aliens!'
          },
          {
            name: 'Meeseeks and Destroy'
          },
          {
            name: 'Rixty Minutes'
          },
          {
            name: 'Something Ricked This Way Comes'
          }
        ]
      }
    };
    const mockRequest = jest.fn();
    when(mockRequest)
      .calledWith(process.env.API_URL, episodesFilterByNameQuery, { page: 1, name: 'e' })
      .mockReturnValue(page1);
    jest.spyOn(graphqlRequest, 'request').mockImplementation(mockRequest);

    const episodeNames = await getAllEpisodeNamesWithCharE();

    const episodeNamesExpected = page1.episodes.results.map((episode) => episode.name);
    expect(episodeNames).toEqual(episodeNamesExpected);
  });

  test('All episodes names with E char should be obtained correctly when there are 2 pages', async () => {
    const page1 = {
      episodes: {
        info: {
          pages: 2
        },
        results: [
          {
            name: 'Lawnmower Dog'
          },
          {
            name: 'M. Night Shaym-Aliens!'
          },
          {
            name: 'Meeseeks and Destroy'
          },
          {
            name: 'Rixty Minutes'
          },
          {
            name: 'Something Ricked This Way Comes'
          }
        ]
      }
    };
    const page2 = {
      episodes: {
        info: {
          pages: 2
        },
        results: [
          {
            name: 'Close Rick-counters of the Rick Kind'
          },
          {
            name: 'Ricksy Business'
          },
          {
            name: 'A Rickle in Time'
          },
          {
            name: 'Auto Erotic Assimilation'
          },
          {
            name: 'Get Schwifty'
          }
        ]
      }
    };
    const mockRequest = jest.fn();
    when(mockRequest)
      .calledWith(process.env.API_URL, episodesFilterByNameQuery, { page: 1, name: 'e' })
      .mockReturnValue(page1)
      .calledWith(process.env.API_URL, episodesFilterByNameQuery, { page: 2, name: 'e' })
      .mockReturnValue(page2);
    jest.spyOn(graphqlRequest, 'request').mockImplementation(mockRequest);

    const episodeNames = await getAllEpisodeNamesWithCharE();

    const episodeNamesExpected = page1.episodes.results.concat(page2.episodes.results).map((episode) => episode.name);
    expect(episodeNames).toEqual(episodeNamesExpected);
  });

  test('All character names with E char should be obtained correctly when there are 1 page', async () => {
    const page1 = {
      characters: {
        info: {
          pages: 1
        },
        results: [
          {
            name: 'Rick Sanchez'
          },
          {
            name: 'Abadango Cluster Princess'
          },
          {
            name: 'Abradolf Lincler'
          },
          {
            name: 'Adjudicator Rick'
          },
          {
            name: 'Agency Director'
          }
        ]
      }
    };
    const mockRequest = jest.fn();
    when(mockRequest)
      .calledWith(process.env.API_URL, charactersFilterByNameQuery, { page: 1, name: 'c' })
      .mockReturnValue(page1);
    jest.spyOn(graphqlRequest, 'request').mockImplementation(mockRequest);

    const characterNames = await getAllCharacterNamesWithCharC();

    const characterNamesExpected = page1.characters.results.map((character) => character.name);
    expect(characterNames).toEqual(characterNamesExpected);
  });

  test('All character names with E char should be obtained correctly when there are 2 pages', async () => {
    const page1 = {
      characters: {
        info: {
          pages: 2
        },
        results: [
          {
            name: 'Rick Sanchez'
          },
          {
            name: 'Abadango Cluster Princess'
          },
          {
            name: 'Abradolf Lincler'
          },
          {
            name: 'Adjudicator Rick'
          },
          {
            name: 'Agency Director'
          }
        ]
      }
    };
    const page2 = {
      characters: {
        info: {
          pages: 2
        },
        results: [
          {
            name: 'Alien Rick'
          },
          {
            name: 'Amish Cyborg'
          },
          {
            name: 'Antenna Rick'
          },
          {
            name: 'Aqua Rick'
          },
          {
            name: 'Arcade Alien'
          }
        ]
      }
    };
    const mockRequest = jest.fn();
    when(mockRequest)
      .calledWith(process.env.API_URL, charactersFilterByNameQuery, { page: 1, name: 'c' })
      .mockReturnValue(page1)
      .calledWith(process.env.API_URL, charactersFilterByNameQuery, { page: 2, name: 'c' })
      .mockReturnValue(page2);
    jest.spyOn(graphqlRequest, 'request').mockImplementation(mockRequest);

    const characterNames = await getAllCharacterNamesWithCharC();

    const characterNamesExpected = page1.characters.results
      .concat(page2.characters.results)
      .map((character) => character.name);
    expect(characterNames).toEqual(characterNamesExpected);
  });

  test('All episodes should be obtained correctly when there are 1 page', async () => {
    const page1 = {
      episodes: {
        info: {
          pages: 1
        },
        results: [
          {
            id: '1',
            name: 'Pilot',
            episode: 'S01E01',
            characters: [
              {
                name: 'Rick Sanchez',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              },
              {
                name: 'Morty Smith',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              },
              {
                name: 'Bepisian',
                origin: {
                  id: '11',
                  name: 'Bepis 9'
                }
              }
            ]
          },
          {
            id: '2',
            name: 'Lawnmower Dog',
            episode: 'S01E02',
            characters: [
              {
                name: 'Rick Sanchez',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              },
              {
                name: 'Morty Smith',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              }
            ]
          },
          {
            id: '3',
            name: 'Anatomy Park',
            episode: 'S01E03',
            characters: [
              {
                name: 'Rick Sanchez',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              }
            ]
          }
        ]
      }
    };
    const mockRequest = jest.fn();
    when(mockRequest).calledWith(process.env.API_URL, episodesQuery, { page: 1 }).mockReturnValue(page1);
    jest.spyOn(graphqlRequest, 'request').mockImplementation(mockRequest);

    const episodes = await getAllEpisodes();

    expect(episodes).toEqual(page1.episodes.results);
  });

  test('All episodes should be obtained correctly when there are 2 pages', async () => {
    const page1 = {
      episodes: {
        info: {
          pages: 2
        },
        results: [
          {
            id: '1',
            name: 'Pilot',
            episode: 'S01E01',
            characters: [
              {
                name: 'Rick Sanchez',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              },
              {
                name: 'Morty Smith',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              },
              {
                name: 'Bepisian',
                origin: {
                  id: '11',
                  name: 'Bepis 9'
                }
              }
            ]
          },
          {
            id: '2',
            name: 'Lawnmower Dog',
            episode: 'S01E02',
            characters: [
              {
                name: 'Rick Sanchez',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              },
              {
                name: 'Morty Smith',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              }
            ]
          },
          {
            id: '3',
            name: 'Anatomy Park',
            episode: 'S01E03',
            characters: [
              {
                name: 'Rick Sanchez',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              }
            ]
          }
        ]
      }
    };
    const page2 = {
      episodes: {
        info: {
          pages: 2
        },
        results: [
          {
            id: '4',
            name: 'M. Night Shaym-Aliens!',
            episode: 'S01E04',
            characters: [
              {
                name: 'Rick Sanchez',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              },
              {
                name: 'Morty Smith',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              },
              {
                name: 'Beth Smith',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)'
                }
              }
            ]
          }
        ]
      }
    };
    const mockRequest = jest.fn();
    when(mockRequest)
      .calledWith(process.env.API_URL, episodesQuery, { page: 1 })
      .mockReturnValue(page1)
      .calledWith(process.env.API_URL, episodesQuery, { page: 2 })
      .mockReturnValue(page2);
    jest.spyOn(graphqlRequest, 'request').mockImplementation(mockRequest);

    const episodes = await getAllEpisodes();

    expect(episodes).toEqual(page1.episodes.results.concat(page2.episodes.results));
  });

  test('Char counters it should be generated correctly', async () => {
    const mockGetAllLocationNamesWithCharL = jest.fn().mockReturnValue(Promise.resolve([]));
    const mockGetAllEpisodeNamesWithCharE = jest.fn().mockReturnValue(Promise.resolve([]));
    const mockGetAllCharacterNamesWithCharC = jest.fn().mockReturnValue(Promise.resolve([]));
    jest.spyOn(apiService, 'getAllLocationNamesWithCharL').mockImplementation(mockGetAllLocationNamesWithCharL);
    jest.spyOn(apiService, 'getAllEpisodeNamesWithCharE').mockImplementation(mockGetAllEpisodeNamesWithCharE);
    jest.spyOn(apiService, 'getAllCharacterNamesWithCharC').mockImplementation(mockGetAllCharacterNamesWithCharC);

    const mockCountCharacters = jest.fn();
    when(mockCountCharacters)
      .calledWith([], 'l')
      .mockReturnValue(5)
      .calledWith([], 'e')
      .mockReturnValue(10)
      .calledWith([], 'c')
      .mockReturnValue(15);
    jest.spyOn(stringUtils, 'countCharacters').mockImplementation(mockCountCharacters);

    const counters = await getCharCounters();

    expect(counters[0].total).toEqual(5);
    expect(counters[1].total).toEqual(10);
    expect(counters[2].total).toEqual(15);
  });

  test('Episodes it should be generated correctly', async () => {
    const apiEpisodes = [
      {
        id: '1',
        name: 'Pilot',
        episode: 'S01E01',
        characters: [
          {
            name: 'Rick Sanchez',
            origin: {
              name: 'Earth (C-137)'
            }
          },
          {
            name: 'Morty Smith',
            origin: {
              name: 'Earth (C-137)'
            }
          },
          {
            name: 'Bepisian',
            origin: {
              name: 'Bepis 9'
            }
          }
        ]
      },
      {
        id: '2',
        name: 'Lawnmower Dog',
        episode: 'S01E02',
        characters: [
          {
            name: 'Rick Sanchez',
            origin: {
              name: 'Earth (C-137)'
            }
          },
          {
            name: 'Bill',
            origin: {
              name: 'Earth (Replacement Dimension)'
            }
          },
          {
            name: 'Centaur',
            origin: {
              name: 'unknown'
            }
          },
          {
            name: 'Creepy Little Girl',
            origin: {
              name: 'unknown'
            }
          },
          {
            name: 'Jerry Smith',
            origin: {
              name: 'Earth (C-137)'
            }
          }
        ]
      }
    ];
    const mockGetAllEpisodes = jest.fn().mockReturnValue(Promise.resolve(apiEpisodes));
    jest.spyOn(apiService, 'getAllEpisodes').mockImplementation(mockGetAllEpisodes);

    const episodes = await getEpisodesLocations();

    expect(episodes.data[0].name).toEqual('Pilot');
    expect(episodes.data[0].season).toEqual(1);
    expect(episodes.data[0].episode).toEqual(1);
    expect(episodes.data[0].originsOfCharacters.length).toEqual(2);
    expect(episodes.data[1].name).toEqual('Lawnmower Dog');
    expect(episodes.data[1].season).toEqual(1);
    expect(episodes.data[1].episode).toEqual(2);
    expect(episodes.data[1].originsOfCharacters.length).toEqual(3);
  });
});
