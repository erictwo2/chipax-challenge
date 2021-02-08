import CharacterCounter from '@app/components/home/CharacterCounter';
import Hero from '@app/components/layout/Hero';
import HeroText from '@app/components/layout/HeroText';
import HeroTitle from '@app/components/layout/HeroTitle';
import Navbar from '@app/components/layout/Navbar';
import { getCharCounters } from '@app/services/apiService';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import ErrorPage from 'next/error';

type CharCounter = {
  total: number;
  text: string;
  suffix?: string;
};

type Error = {
  message: string;
  code: number;
};

const Home = ({ counters, error }: { counters: CharCounter[]; error: Error }): ReactElement => {
  if (error) {
    return <ErrorPage statusCode={error.code} />;
  }

  return (
    <section>
      <Head>
        <title>Rick and Morty | Chipax Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Navbar />
        <div className="pt-36">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col md:w-3/6 justify-center items-start text-center md:text-left">
              <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
                <HeroTitle title="RICK <br/> AND <br/> MORTY" />
                <HeroText text="Welcome to the Chipax challenge solved by Eric Hidalgo." />
                <a
                  className="rounded-full shadow-lg bg-red-400 hover:bg-red-500 py-4 px-6 mb-6 text-white text-xl"
                  href="https://www.notion.so/Rick-and-Morty-Challenge-84a1b794dc09429fb3178c2a24e7c217"
                  rel="noopener noreferrer"
                  target="_blank">
                  INSTRUCTIONS
                </a>
              </div>
              <div className="flex mt-8">
                <CharacterCounter counters={counters} />
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </section>
  );
};

export default Home;

export const getServerSideProps = async ({ res }) => {
  try {
    const counters = await getCharCounters();

    return {
      props: { counters }
    };
  } catch (error) {
    res.statusCode = 404;

    return {
      props: { error: { message: 'Not found', code: res.statusCode } }
    };
  }
};
