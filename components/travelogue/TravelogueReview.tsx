import {
  Avatar,
  Box,
  Divider,
  Text,
  Wrap,
  Stack,
  useColorModeValue,
  Flex,
  Icon,
  Spinner,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillDislike } from 'react-icons/ai';
import { BiDislike, BiLike } from 'react-icons/bi';
import {
  useDislikeTripReviewMutationMutation,
  useLikeTripReviewMutationMutation,
  UserType,
} from '../../graphql/generated/types';

interface Props {
  id: string;
  author: Pick<UserType, 'id' | 'username' | 'avatar'> | undefined;
  createdAt: string | undefined;
  description: string;
  dislikesCount: number;
  likesCount: number;
  userLiked: string;
}

const TravelogueReview = (props: Props) => {
  const [likeReview, likeReviewStatus] = useLikeTripReviewMutationMutation({
    variables: { likeTripReviewReview: props.id },
    onCompleted: (data) => {
      setIsLiked(data?.likeTripReview?.tripReviewLike?.value == 'A_1');
      setIsDisLiked(!(data?.likeTripReview?.tripReviewLike?.value == 'A_1'));

      setLikeCount(
        data?.likeTripReview?.tripReviewLike?.review.likesCount as number
      );
      setDisLikeCount(
        data?.likeTripReview?.tripReviewLike?.review.dislikesCount as number
      );
    },
  });
  const [
    disLikeReview,
    disLikeReviewStatus,
  ] = useDislikeTripReviewMutationMutation({
    variables: { dislikeTripReviewReview: props.id },
    onCompleted: (data) => {
      setIsDisLiked(data?.dislikeTripReview?.tripReviewLike?.value == '_1');
      setIsLiked(!(data?.dislikeTripReview?.tripReviewLike?.value == '_1'));
      setLikeCount(
        data?.dislikeTripReview?.tripReviewLike?.review.likesCount as number
      );
      setDisLikeCount(
        data?.dislikeTripReview?.tripReviewLike?.review.dislikesCount as number
      );
    },
  });

  const onLikeReview = () => {
    setIsLiked(!isLiked);
    likeReview();
  };
  const onDisLikeReview = () => {
    setIsDisLiked(!isDisLiked);
    disLikeReview();
  };

  const [likeCount, setLikeCount] = useState(props.likesCount);
  const [disLikeCount, setDisLikeCount] = useState(props.dislikesCount);
  const [isLiked, setIsLiked] = useState(props.userLiked == '1');
  const [isDisLiked, setIsDisLiked] = useState(props.userLiked == '-1');

  return (
    <div>
      <Box
        fontWeight="light"
        rounded="md"
        // bgColor={useColorModeValue('gray.100', 'gray.900')}
        p="3"
      >
        <Stack>
          <Flex justifyContent="space-between">
            <Box>
              <Link href={`/profile/${props.author?.username}`} passHref>
                <Wrap
                  fontWeight="light"
                  fontSize="md"
                  align="center"
                  cursor="pointer"
                >
                  <Avatar size="sm" src={props.author?.avatar} />
                  <Text fontSize="sm">{props.author?.username}</Text>
                </Wrap>
              </Link>
            </Box>
            <Wrap>
              <Wrap
                borderWidth="1.5px"
                px="1"
                borderRadius="md"
                alignItems="center"
              >
                <Box onClick={() => onDisLikeReview()} cursor="pointer">
                  <Icon as={BiDislike} color={isDisLiked ? 'red' : 'black'} />
                </Box>
                <Text color={isDisLiked ? 'red' : 'black'}>{disLikeCount}</Text>
              </Wrap>
              <Wrap
                borderRadius="md"
                borderWidth="1.5px"
                px="1"
                alignItems="center"
              >
                <Box onClick={() => onLikeReview()} cursor="pointer">
                  <Icon as={BiLike} color={isLiked ? 'green' : 'black'} />
                </Box>

                <Text color={isLiked ? 'green' : 'black'}>{likeCount}</Text>
              </Wrap>
            </Wrap>
          </Flex>
          <Divider />
          <Text fontSize="sm" fontWeight="md" whiteSpace="pre-line">
            {props.description}
          </Text>
        </Stack>
      </Box>
    </div>
  );
};

export default TravelogueReview;
