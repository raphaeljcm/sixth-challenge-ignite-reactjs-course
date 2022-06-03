import { Box, Flex, Heading, Icon, SimpleGrid, Stack, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CountryCard } from "../../components/CountryCard";
import api from "../../services/api";

interface Continent {
  name: string;
  about: string;
  countries: {
    name: string;
    countryToImage: string;
    capital: string;
  }[]
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps): JSX.Element {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  });
  const countries = continent.countries;

  return (
    <>
      <Head><title>WorldTrip | {continent.name.charAt(0).toUpperCase() + continent.name.slice(1)}</title></Head>

      <Flex w='100%' maxWidth={1440} mx='auto' direction='column' align='center'>
        <Flex 
            bgImage={`url('/images/continents/europe-banner.png')`} 
            bgRepeat='no-repeat' 
            bgSize='cover'
            h={['150px', '500px']}
            w='100%'
            justify='center'
          >
            <Flex 
              align={['center', 'flex-end']} 
              justify={['center', 'flex-start']} 
              h='100%' maxWidth={1200} 
              w='100%'
              px='10' 
              pb={['', '20']}
            >
              <Heading color='gray.50' fontWeight={600} fontSize={[40, 48]}>Europa</Heading>
            </Flex>
        </Flex>
      </Flex>

      <Flex w='100%' direction={['column', 'row']} maxWidth={1200} mx='auto' mt='80px' px='10' justify='space-between'>
        <Text maxWidth={600} color='gray.600' fontSize={[16, 24]} fontWeight='400' textAlign='justify'>
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>

        <Flex align='center' gap={['15', '20']} justify='space-between' mt={isWideScreen ? '' : '5'}>
          <Box textAlign='center'>
            <Text color='yellow.500' fontSize={[24, 40]} fontWeight={600}>50</Text>
            <Text color='gray.600' fontSize={[12, 14, 20]} fontWeight={600}>países</Text>
          </Box>
          <Box textAlign='center'>
            <Text color='yellow.500' fontSize={[24, 40]} fontWeight={600}>60</Text>
            <Text color='gray.600' fontSize={[12, 14, 20]} fontWeight={600}>línguas</Text>
          </Box>
          <Box textAlign='center'>
            <Text color='yellow.500' fontSize={[24, 40]} fontWeight={600}>27</Text>
            <Box>
              <Text color='gray.600' fontSize={[12, 14, 20]} fontWeight={600} display='inline-block' mr='2'>cidades +100</Text>
              <Tooltip label='Muitos países'>
                <span><Icon as={AiOutlineInfoCircle} color='#999999' opacity='.5' /></span>
              </Tooltip>
            </Box>
          </Box>
        </Flex>
      </Flex>

      <Stack w='100%' maxWidth={1200} mx='auto' mt='80px' px='10' pb='20'>
        <Heading fontWeight={500} color='gray.600' fontSize={30} mb='40px'>
          Cidades +100
        </Heading>

        <SimpleGrid minChildWidth={256} h={280} spacing={['6', '8']} flex='1'>
          {countries.map(country => (
            <CountryCard 
              key={country.name} 
              country={country.name} 
              countryToImage={country.countryToImage} 
              capital={country.capital} />
          ))}
        </SimpleGrid>
      </Stack>
    </> 
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await api.get(`/data/${params.continent}`).catch(err => err.message);

  const continent: Continent = {
    name: data.name,
    about: data.about,
    countries: data.countries.map(content => {
      return {
        name: content.name,
        countryToImage: content.countryToImage,
        capital: content.capital
      }
    })
  }

  return {
    props: {
      continent
    }
  }
}