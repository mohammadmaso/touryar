import { useState } from 'react';

import { TimeIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Center,
  Flex,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react';
import Link from 'next/link';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FiEye, FiMapPin } from 'react-icons/fi';
import {
  namedOperations,
  useLikeTripMutation,
} from '../../graphql/generated/types';
import { getDays } from '../../utils/time';

interface Props {
  data: any;
  actions: any;
  queries: any;
}
export default function TourSmallCard({ data }: any) {
  const [isLiked, setIsLiked] = useState(data.userLiked);
  const [likeCount, setLikeCount] = useState(data.likes);
  const [likeTrip, likeTripStatus] = useLikeTripMutation({
    refetchQueries: [namedOperations.Query.TripDetailLikes],
    variables: { createTripLikeTripId: data.id },
    onCompleted: (data) => {
      setIsLiked(data.createTripLike?.like);
      setLikeCount(data?.createTripLike?.trip?.likes);
    },
  });

  const onLikeTrip = () => {
    isLiked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);

    setIsLiked(!isLiked);
    likeTrip();
  };

  return (
    // <Link href={`/travelogues/${data.id}`} passHref>
    <Center py={6} m={2} textColor="white" textAlign="right" cursor="pointer">
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        overflow={'hidden'}
        maxW={'full'}
        minW="250px"
        h="300px"
        position="relative"
        transition={'all .3s ease'}
        _hover={{ transform: 'scale(1.1,1.1)' }}
      >
        <Flex
          position="absolute"
          top="0"
          right="0"
          bgGradient="linear(to-b, #000000,#ffffff00)"
          height="40%"
          width="full"
          align="flex-start"
          justifyContent="space-between"
          p={3}
          py={4}
        >
          <Flex textColor="white" justifyContent="flex-start">
            <Avatar
              showBorder
              size="md"
              ml="1"
              mr="1"
              src={data.user?.avatar}
              // alt={data.name}
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text mr="1" textAlign="right" fontWeight={400}>
                {data.name}
              </Text>
              <Wrap spacing="1">
                <Tag
                  size="sm"
                  key={data.ctegory.title}
                  colorScheme="primary"
                  variant="solid"
                >
                  {data.category.title}
                </Tag>
              </Wrap>
            </Stack>
          </Flex>
          <Stack justifyContent="flex-start" alignItems="flex-end">
            <Wrap spacing="1" justifyItems="center" alignItems="flex-end">
              <Text fontSize="sm">{likeCount}</Text>
              <Wrap
                spacing="0.5"
                transition={'all .3s ease'}
                _hover={{ transform: 'scale(1.3,1.3)' }}
                onClick={onLikeTrip}
                cursor="pointer"
              >
                {isLiked ? (
                  <AiFillHeart size="20" color="red" />
                ) : (
                  <AiOutlineHeart size="20" />
                )}
              </Wrap>
            </Wrap>
            <Wrap spacing="1" justifyItems="center" alignItems="flex-end">
              <Text fontSize="sm">{data.viewsCount}</Text>
              <Icon as={FiEye} />
            </Wrap>
          </Stack>
        </Flex>

        <Image
          alt="Test"
          src={data.defaultImage}
          objectFit="cover"
          h="full"
          fallbackSrc="/images/placeholder.png"
        />
        <Link href={`/travelogues/${data.id}`} passHref>
          <Flex
            position="absolute"
            bottom="0"
            right="0"
            bgGradient="linear(to-t, #000000,#ffffff00)"
            height="50%"
            width="full"
            align="flex-start"
            justifyContent="flex-end"
            p="3"
            direction="column"
          >
            <Text fontWeight={500}>{data.title}</Text>
            <Wrap fontSize="sm" fontWeight="light" align="center" spacing="3">
              <Wrap align="center" spacing="1">
                <TimeIcon h="3.5" w="3.5" />
                <Text>{getDays(data.startDate, data.endDate)}</Text>
              </Wrap>
              <Wrap align="center" spacing="1">
                <FiMapPin />
                <Text>{`${data.country?.name} - ${data.province?.name}`}</Text>
              </Wrap>
            </Wrap>
          </Flex>
        </Link>
      </Box>
    </Center>
  );
}
