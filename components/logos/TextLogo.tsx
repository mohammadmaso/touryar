import { Box, HStack, Img, Text, useColorModeValue } from '@chakra-ui/react';
// import Image from 'next/image';
import Link from 'next/link';

export default function TextLogo(props: any) {
  return (
    <Box {...props} cursor="pointer">
      <Link href="/" passHref>
        <HStack spacing={'0'}>
          <Img
            src={useColorModeValue('/CircleLogo.svg', '/CircleLogo.svg')}
            height={props.height ?? 100}
            width={props.width ?? 100}
            // layout="intrinsic"
            alt="tripper-logo"
          />
          <Text size={'sm'} color="primary" fontWeight="black">
            توریار
          </Text>
        </HStack>
      </Link>
    </Box>
  );
}
