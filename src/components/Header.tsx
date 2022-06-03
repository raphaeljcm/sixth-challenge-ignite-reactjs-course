import { Flex, Icon, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowBack } from 'react-icons/io';

export function Header() {
  const router = useRouter();
  let isHomepage = false;

  if(router.asPath === '/'){
    isHomepage = true;
  }

  return (
    <Flex as='header' w='100%' maxWidth={['90vw', 1200]} py={6} mx='auto' align='center' position='relative'>
      { !isHomepage && (
        <Link href="/" passHref>
          <ChakraLink position='absolute' display='flex'><Icon as={IoIosArrowBack} fontSize={['20', '32']} /></ChakraLink>
        </Link>
      )}
      <Image src="/logo.png" alt="Logo" w={['120px', '180px']} mx='auto' />
    </Flex>
  );
}