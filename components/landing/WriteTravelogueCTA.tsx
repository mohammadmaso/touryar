import { Button } from '@chakra-ui/button';
import { Box, Center, Heading, Text, Wrap } from '@chakra-ui/layout';
import Link from 'next/link';
import React from 'react';

interface Props {}

const WriteTravelogueCTA = (props: Props) => {
  return (
    <Box
      backgroundImage={'url(/images/slider/caleb.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition="center 80%"
      backgroundRepeat="no-repeat"
      w="full"
      h="30vh"
      rounded="md"
    >
      <Center rounded="md" flexDirection="column" h="full" bgColor="#00000040">
        <Wrap direction="column" justifyContent="center" align="center">
          <Heading
            textColor="white"
            fontWeight="bold"
            fontSize={['2xl', '2xl', '3xl']}
          >
            سفرت رو برای همیشه موندگار کن...
          </Heading>
          {/* <Text
            bgColor="#00000074"
            px="4"
            py="0.5"
            textColor="white"
            fontWeight="bold"
            fontSize="sm"
          >
            تور بعدی خودت رو اینجا حرفه‌ای بساز...
          </Text> */}
          <Link href="/travelogues/new/init" passHref>
            <Button
              rounded="sm"
              fontSize="sm"
              // size="sm"
              fontWeight="black"
              // textColor="white"
              // bgColor="whiteAlpha.700"
              colorScheme="whiteAlpha"
            >
              شروع به نوشتن
            </Button>
          </Link>
        </Wrap>
      </Center>
    </Box>
  );
};

export default WriteTravelogueCTA;
