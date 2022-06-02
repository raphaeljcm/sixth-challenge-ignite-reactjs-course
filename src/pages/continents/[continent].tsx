import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

interface ContinentProps {
  continent: {
    name: string;
    about: string;
    countries: {
      name: string;
      capital: string;
    }[]
  }
}

export default function Continent({ continent }: ContinentProps): JSX.Element {
  return (
    <>
      <Head><title>WorldTrip | Europa</title></Head>

      <Flex w='100%' maxWidth={1440} mx='auto' direction='column' align='center'>
        <Flex 
            bgImage={`url('/images/continents/europe-banner.png')`} 
            bgRepeat='no-repeat' 
            bgSize='cover'
            h='500px'
            w='100%'
            justify='center'
          >
            <Flex align='flex-end' h='100%' maxWidth={1200} w='100%' px='10' pb='20'>
              <Heading color='gray.50' fontWeight={600} fontSize={48}>Europa</Heading>
            </Flex>
          </Flex>
      </Flex>
    </> 
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {

    }
  }
}