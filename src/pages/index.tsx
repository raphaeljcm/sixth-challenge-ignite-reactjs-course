import { Box, Flex, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head><title>WorldTrip | Home</title></Head>

      <Flex w='100%' maxWidth={1440} mx='auto' direction='column' align='center'>
        <Box 
          bgImage="url('/images/background.png')" 
          bgRepeat='no-repeat' 
          bgSize='cover'
          h='335px'
          w='100%'
        >
          <Flex justify='space-around' align='center' h='100%'>
            <Stack spacing='4' maxWidth={524}>
              <Heading 
                color='gray.50' 
                fontWeight={500} 
                size='xl'
              >
                5 Continentes, <br /> infinitas possibilidades.
              </Heading>

              <Text
                color='gray.300'
                fontWeight={400}
                
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Stack>

            <Image 
              src='/images/airplane.svg' 
              alt='airplane' 
              position='relative' 
              bottom='-10'
            />
          </Flex>
        </Box>

        <HStack mt='115' spacing='130' width='100%' maxWidth={1200} justify='space-around'>
          <Flex direction='column' align='center'>
            <Image src='/images/cocktail.svg' alt='cocktail' />
            <Text mt='6' fontWeight={600} fontSize='md'>vida noturna</Text>
          </Flex>
          <Flex direction='column' align='center'>
            <Image src='/images/surf.svg' alt='surf' />
            <Text mt='6' fontWeight={600} fontSize='md'>praia</Text>
          </Flex>
          <Flex direction='column' align='center'>
            <Image src='/images/building.svg' alt='building' />
            <Text mt='6' fontWeight={600} fontSize='md'>moderno</Text>
          </Flex>
          <Flex direction='column' align='center'>
            <Image src='/images/museum.svg' alt='museum' />
            <Text mt='6' fontWeight={600} fontSize='md'>clássico</Text>
          </Flex>
          <Flex direction='column' align='center'>
            <Image src='/images/earth.svg' alt='earth' />
            <Text mt='6' fontWeight={600} fontSize='md'>e mais...</Text>
          </Flex>
        </HStack>

        
      </Flex>
    </>
  );
}

export default Home;
