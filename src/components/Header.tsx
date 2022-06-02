import { Flex, Image } from "@chakra-ui/react";

export function Header() {

  return (
    <Flex as='header' w='100%' maxWidth={1200} py={6} mx='auto' align='center'>
      <Image src="/logo.png" alt="Logo" w={180} mx='auto' />
    </Flex>
  );
}