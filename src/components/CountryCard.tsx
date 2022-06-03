import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface CountryCardProps {
  country: string;
  countryToImage?: string;
  capital: string;
}

export function CountryCard({ country, capital, countryToImage = '' }: CountryCardProps) {
  const capitalData = capital.charAt(0).toUpperCase() + capital.slice(1);

  return (
    <Stack
      w='100%' 
      maxWidth={256} 
      border='1px solid rgba(255, 186, 8, 0.5)'
      borderRadius='4px'
    >
      <Box w='100%'>
        <Image src={`/images/continents/capitals/${capital}.png`} alt={capital} />
      </Box>
      <Flex p='18' align='center' justify='space-between'>
        <Stack>
          <Heading 
            fontFamily='Barlow, sans-serif' 
            color='gray.600' 
            fontSize={20}
            fontWeight={600}
          >
            {capitalData}
            </Heading>
          <Text
            color='gray.500' 
            fontFamily='Barlow, sans-serif'
            fontWeight={500}
            fontSize={16}
          >
            {country}
          </Text>
        </Stack>
        <Image src={`/images/continents/countries/${countryToImage ? countryToImage : country}.svg`} alt={country} />
      </Flex>
    </Stack>
  );
}