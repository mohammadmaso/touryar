import { Button } from '@chakra-ui/button';
import { Box, Center, Heading, Text, Wrap } from '@chakra-ui/layout';
import Link from 'next/link';

interface Props {}

const TourLeaderCTA = (props: Props) => {
  return (
    <Box
      backgroundImage={
        'url(/images/slider/nika-tchokhonelidze-Ms_p0I5DQSM-unsplash.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
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
            تورلیدر هستی؟
          </Heading>
          <Text
            bgColor="#00000074"
            px="4"
            py="0.5"
            textColor="white"
            fontWeight="bold"
            fontSize="sm"
          >
            تور بعدی خودت رو اینجا حرفه‌ای بساز...
          </Text>
          <Link href="/auth/tourguid/register" passHref>
            <Button
              rounded="sm"
              fontSize="sm"
              // size="sm"
              // fontWeight="black"
              // textColor="white"
              // bgColor="whiteAlpha.700"
              colorScheme="primary"
            >
              ثبت‌نام
            </Button>
          </Link>
        </Wrap>
      </Center>
    </Box>
  );
};

export default TourLeaderCTA;
