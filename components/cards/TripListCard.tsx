import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react';
import Link from 'next/link';

import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FiEye } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import {
  namedOperations,
  TripType,
  useLikeTripMutation,
} from '../../graphql/generated/types';
import { getDate, getDays } from '../../utils/time';
import { ActivityCard } from './ActivityCard';

interface Props {
  data: TripType;
}

const TripListCard = ({ data }: Props) => {
  const [isLiked, setIsLiked] = useState(data.userLiked);
  const [likeCount, setLikeCount] = useState(data.likes);
  const [likeTrip, likeTripStatus] = useLikeTripMutation({
    refetchQueries: [namedOperations.Query.TripDetailLikes],
    variables: { createTripLikeTripId: data.id },
    onCompleted: (data) => {
      setIsLiked(data.createTripLike?.like);
      setLikeCount(data?.createTripLike?.trip?.likes!);
    },
  });

  const onLikeTrip = () => {
    isLiked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);

    setIsLiked(!isLiked);
    likeTrip();
  };

  return (
    <Flex
      w="full"
      direction={{ base: 'column', md: 'row', lg: 'row' }}
      boxShadow="md"
      p="3"
      rounded="md"
      justifyContent="space-between"
      alignContent="space-between"
      bgColor={useColorModeValue('white', 'gray.900')}
    >
      <Stack flex={2} justifyContent="space-between">
        <Stack>
          <Text as="h2" fontSize="md" fontWeight="extrabold">
            {data.title}
          </Text>
          <Wrap>
            {data.categories?.edges.map((item: any) => (
              <Tag key={item.node.id} colorScheme="primary">
                {item.node.title}
              </Tag>
            ))}
          </Wrap>
          <Wrap fontSize="sm" spacing="1">
            <Wrap align="center">
              <TimeIcon ml="1" />
              <Text>{getDays(data?.startDate, data?.endDate)}</Text>
            </Wrap>
            <Divider orientation="vertical" />
            <Wrap align="center">
              <CalendarIcon ml="1" />
              <Text>{getDate(data?.startDate)}</Text>
            </Wrap>
            <Divider orientation="vertical" />
            <Wrap align="center">
              <HiLocationMarker />
              <Text>{`${data.country.name} - ${data.province.name}`}</Text>
            </Wrap>
            <Divider orientation="vertical" />
            <Wrap align="center" spacing="0.5">
              {data.experiences?.edges.length != 0 && (
                <>
                  <Text fontWeight="extrabold">
                    {data.experiences?.edges.length}
                  </Text>
                  <Text fontWeight="light">تجربه</Text>
                </>
              )}
            </Wrap>
          </Wrap>
        </Stack>
        <Wrap>
          {data.activities?.edges.map((item) => (
            <ActivityCard
              key={item?.node?.id as string}
              svg={item?.node?.svg as string}
              title={item?.node?.titleFa as string}
              id={item?.node?.id as string}
              size={2}
              padding={0}
              showText={false}
            />
          ))}
        </Wrap>
        <Text fontWeight="light" fontSize="sm">
          {data.description?.substring(0, 200)}
        </Text>
        <Stack>
          <HStack w="fit-content" align={'center'}>
            <Avatar
              src={data.author?.avatar}
              // alt={data.author?.username}
              size="sm"
              ml="2"
            />
            <Text fontWeight={300} fontSize="sm" dir="ltr">
              {data.author?.username}
            </Text>
          </HStack>
          <Link href={`/travelogues/${data.id}`} passHref>
            <Button size="sm">جزییات بیشتر</Button>
          </Link>
        </Stack>
      </Stack>
      <Flex
        justifyContent="flex-end"
        flex={2}
        direction={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <Wrap
          direction={{ base: 'row-reverse', md: 'column', lg: 'column' }}
          my={{ base: '3', md: '0', lg: '0' }}
          ml="2"
        >
          <Wrap
            spacing="1"
            justifyContent="flex-start"
            alignContent="flex-start"
          >
            <Wrap
              transition={'all .3s ease'}
              _hover={{ transform: 'scale(1.3,1.3)' }}
              onClick={onLikeTrip}
              cursor="pointer"
              alignItems="flex-end"
              justifyItems="center"
              spacing="1"
            >
              <Text fontSize="sm">{likeCount}</Text>
              {isLiked ? (
                <AiFillHeart size="20" color="red" />
              ) : (
                <AiOutlineHeart size="20" />
              )}
            </Wrap>
            <Wrap spacing="1" justifyItems="center" alignItems="center">
              <Text fontSize="sm">{data.viewsCount}</Text>
              <Icon as={FiEye} />
            </Wrap>
          </Wrap>
        </Wrap>
        <Wrap>
          <Image
            fallbackSrc="/images/placeholder.png"
            src={data.defaultImage}
            alt="travel image"
            rounded="md"
            w="400px"
            h="250px"
            objectFit="cover"
          />
        </Wrap>
      </Flex>
    </Flex>
  );
};

export default TripListCard;
