import {
  Stack,
  Wrap,
  Text,
  Box,
  Divider,
  Image,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import { FiEye, FiUsers } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import { ExperienceType, PlaceType } from '../../graphql/generated/types';
import { ActivityCard } from '../cards/ActivityCard';
import ImageCard from '../ImageCard';
import { IImage } from '../ImageGallery';
import ImageList from '../ImageList';
import { GoPrimitiveDot } from 'react-icons/go';
interface Props {
  experiences: any;
  imageOnClick: any;
}

interface CardProps {
  experience: ExperienceType;
  imageOnClick: () => void;
}

function ExperienceCard({ experience, imageOnClick }: CardProps) {
  const images = experience.images.edges.map(
    (i: any) =>
      ({
        id: i?.node?.id,
        description: i?.node?.description,
        image: i?.node?.image,
      } as IImage)
  ) as IImage[];
  return (
    <Box borderRadius="lg" borderWidth="thin" w="full" minH="7rem" p="2">
      <Stack spacing="0.5">
        <Flex justifyContent="space-between" align="center">
          <Stack>
            <Wrap spacing="1" align="center">
              <Icon as={GoPrimitiveDot} />
              <Text fontWeight="bold" fontSize="sm">
                {experience.title}
              </Text>
            </Wrap>
            {/* <Wrap fontSize="xs" align="center">
              <HiLocationMarker />
              <Text>{experience.place.name}</Text>
            </Wrap> */}
          </Stack>
          <Wrap spacing="0">
            {experience.activities?.edges.map((item) => (
              <ActivityCard
                padding={1}
                key={item?.node?.id as string}
                svg={item?.node?.svg as string}
                title={item?.node?.titleFa as string}
                id={item?.node?.id as string}
                size={1.5}
                showText={false}
              />
            ))}
          </Wrap>
        </Flex>

        <Wrap fontSize="sm" fontWeight="light" p="2">
          <Divider />

          <ImageList images={images} imageOnClick={imageOnClick} />

          <Text>{experience.description}</Text>
        </Wrap>
      </Stack>
    </Box>
  );
}

export const TravelogueExperiences = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiEye />
        <Text fontWeight="extrabold">تجربه‌ها</Text>
      </Wrap>
      <Stack spacing="2">
        {props.experiences?.map((item: any) => (
          <ExperienceCard
            key={item?.node?.id}
            imageOnClick={props.imageOnClick}
            experience={item?.node as ExperienceType}
          />
        ))}
      </Stack>
    </Stack>
  );
};
