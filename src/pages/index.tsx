import CharacterCounter from '@app/components/home/CharacterCounter';
import Hero from '@app/components/layout/Hero';
import HeroText from '@app/components/layout/HeroText';
import HeroTitle from '@app/components/layout/HeroTitle';
import Navbar from '@app/components/layout/Navbar';
import { CharCounter, Episode, getCharCounters, getEpisodes, Result } from '@app/services/apiService';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import ErrorPage from 'next/error';
import { Title1, Title2, Title3 } from '@app/components/shared/typography/Titles';
import Grid from '@app/components/shared/Grid';
import Card from '@app/components/episode/Card';
import ButtonLink from '@app/components/shared/ButtonLink';

type Error = {
  message: string;
  code: number;
};

type Props = {
  counters: CharCounter[];
  episodes: Result<Episode[]>;
  error: Error;
};

const Home = ({ counters, episodes, error }: Props): ReactElement => {
  if (error) {
    return <ErrorPage statusCode={error.code} />;
  }

  return (
    <>
      <section>
        <Head>
          <title>Rick and Morty | Chipax Challenge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero>
          <Navbar />
          <div className="flex items-center h-screen -mt-20 lg:h-auto lg:mt-32">
            <div className="container mx-auto flex flex-wrap flex-col lg:flex-row items-center">
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <div className="flex flex-col items-center justify-center w-full lg:items-start overflow-y-hidden">
                  <HeroTitle title="RICK <br/> AND <br/> MORTY" />
                  <HeroText text="Welcome to the Chipax challenge solved by Eric Hidalgo." />
                  <div className="mt-4 md:mt-3 mb-4">
                    <ButtonLink label="INSTRUCTIONS" href="https://www.notion.so/Rick-and-Morty-Challenge-84a1b794dc09429fb3178c2a24e7c217" />
                  </div>
                </div>
                <div className="flex mt-6 lg:mt-10">
                  <CharacterCounter counters={counters} />
                </div>
              </div>
            </div>
          </div>
        </Hero>
      </section>
      <section className="bg-white">
        <div className="px-6 md:container flex mx-auto pt-4">
          <div className="w-full my-12 flex justify-center items-center">
            <div className="w-2/3 md:w-1/2">
              <Title1 text="Episodes" />
            </div>
            <div className="w-1/3 md:w-1/2 text-right">
              <Title2 text={`${episodes.totalTime.toFixed(1)}s`} />
              <Title3 text="Total Time" />
            </div>
          </div>
        </div>
        <div className="px-6 md:container mx-auto pb-12">
          <Grid>
            {episodes.data.map((episode, index) => (
              <Card key={index} episode={episode} />
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Home;

export const getServerSideProps = async ({ res }) => {
  try {
    const [counters, episodes] = await Promise.all([getCharCounters(), getEpisodes()]);

    return {
      props: { counters, episodes }
    };
  } catch (error) {
    res.statusCode = 404;

    return {
      props: { error: { message: 'Api Server Not found', code: res.statusCode } }
    };
  }
};
