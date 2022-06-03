import { Link as ChakraLink, Box, Divider, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const Home: NextPage = () => {
  return (
    <>
      <Head><title>WorldTrip | Home</title></Head>

      <Flex w='100%' maxWidth={1440} mx='auto' direction='column' align='center'>
        <Flex 
          bgImage="url('/images/background.png')" 
          bgRepeat='no-repeat' 
          bgSize='cover'
          h='335px'
          w='100%'
          justify='center'
        >
          <Flex align='center' h='100%' maxWidth={1200} w='100%' px='10' justify='space-between'>
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
                fontSize={20}
                
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
        </Flex>

        <HStack mt='115' spacing='130' width='100%' maxWidth={1200} px='10' justify='space-between'>
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

        <Divider width={90} borderColor='gray.600' borderBottomWidth={2} my='70' opacity='1' />

        <Text textAlign='center' color='gray.600' fontWeight={500} fontSize={36} mb='50'>
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Box maxWidth={1200} mb='10'>
          <Swiper 
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            speed={400}
            slidesPerView={1}
          >  
            <SwiperSlide>
              <Box>
                <Image src={`/images/continents/europe.png`} alt='europe' height={450} />
                <Flex 
                  position='absolute' 
                  w='100%' 
                  h='100%' 
                  top='0' 
                  align='center'
                  justify='center'
                  direction='column'
                  gap='4'
                >
                  <Link href={`/continents/1`} passHref>
                    <ChakraLink>
                      <Heading color='gray.50' fontWeight='700' size='2xl'>Europa</Heading>
                    </ChakraLink>
                  </Link>
                  <Text color='gray.50' fontWeight='700' fontSize={24}>dasklhjdasklhdas</Text>
                </Flex>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <Image src={`/images/continents/north-america.png`} alt='North America' height={450} />
                <Flex 
                  position='absolute' 
                  w='100%' 
                  h='100%' 
                  top='0' 
                  align='center'
                  justify='center'
                  direction='column'
                  gap='4'
                >
                  <Link href={`/continents/north-america`} passHref>
                    <ChakraLink>
                      <Heading color='gray.50' fontWeight='700' size='2xl'>América do Norte</Heading>
                    </ChakraLink>
                  </Link>
                  <Text color='gray.50' fontWeight='700' fontSize={24}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </Text>
                </Flex>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <Image src={`/images/continents/south-america.png`} alt='South America' height={450} />
                <Flex 
                  position='absolute' 
                  w='100%' 
                  h='100%' 
                  top='0' 
                  align='center'
                  justify='center'
                  direction='column'
                  gap='4'
                >
                  <Link href={`/continents/south-america`} passHref>
                    <ChakraLink>
                      <Heading color='gray.50' fontWeight='700' size='2xl'>América do Sul</Heading>
                    </ChakraLink>
                  </Link>
                  <Text color='gray.50' fontWeight='700' fontSize={24}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </Text>
                </Flex>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    </>
  );
}

export default Home;