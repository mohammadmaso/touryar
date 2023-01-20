import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react';
import Link from 'next/link';
import { UserType } from '../../graphql/generated/types';

export default function TravelerCard(props: UserType) {
  return (
    <Link href={`/profile/${props.username}`} passHref>
      <Center py={6} cursor="pointer">
        <Stack
          w={'270px'}
          // w={'full'}
          h={'400px'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'lg'}
          rounded={'md'}
          overflow={'hidden'}
          justifyContent="space-around"
        >
          <Box>
            <Image
              h={'120px'}
              w={'full'}
              alt={props.username}
              src={props.profilemodel?.header as string}
              objectFit={'cover'}
              fallbackSrc={'/images/placeholder.png'}
            />
            <Flex justifyContent={'center'} mt={-12}>
              <Tooltip
                isDisabled={!props.profilemodel?.tripStatus}
                hasArrow
                label="در سفر"
                bg="gray.300"
                color="black"
              >
                <Avatar
                  size={'xl'}
                  src={props.avatar}
                  // alt={props.username}
                  css={
                    props.profilemodel?.tripStatus == false
                      ? {
                          border: '2px solid white',
                        }
                      : { border: '3px solid #00801a' }
                  }
                />
              </Tooltip>
            </Flex>
          </Box>
          <Box p={6}>
            <Stack spacing={2} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={300} fontFamily={'body'}>
                {props.username}
              </Heading>
              {/* <Wrap>
              {props.profilemodel?.tripStatus == true ? (
                <Tag size="sm" colorScheme="primary" variant="solid">
                  در سفر
                </Tag>
              ) : null}
            </Wrap> */}
            </Stack>

            <Stack direction={'row'} justifyContent={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>{props.trips.edges.length}</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  تور
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>
                  {props.profilemodel?.followersCount}
                </Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  دنبال‌کننده
                </Text>
              </Stack>
            </Stack>
          </Box>
          <Wrap px="3" pb="2">
            <Text
              textAlign="center"
              fontSize="sm"
              style={{ textJustify: 'auto' }}
              whiteSpace="pre-line"
            >
              {props.profilemodel?.about}
            </Text>
          </Wrap>
        </Stack>
      </Center>
    </Link>
  );
}
