import { Box, Divider, Flex, Icon, Stack, Text, Wrap } from '@chakra-ui/react';
import { FiEdit3, FiEye } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import {
  ExperienceType,
  ExperienceTypeEdge,
} from '../../../graphql/generated/types';
import { ActivityCard } from '../../cards/ActivityCard';
import { IImage } from '../../ImageGallery';
import ImageList from '../../ImageList';
import AddEditButton from './AddEditButton';

interface Props {
  experiences: ExperienceTypeEdge[];
  onAddClick: () => void;
  imageOnClick: any;
  onEditClick: any;
  onDeleteClick: any;
}
interface CardProps {
  experience: ExperienceType;
  imageOnClick: any;
  onEditClick: any;
  onDeleteClick: any;
}
function ExperienceCard({
  experience,
  imageOnClick,
  onDeleteClick,
  onEditClick,
}: CardProps) {
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
        <Flex justifyContent="space-between">
          <Stack>
            <Wrap spacing="3" align="center">
              <Wrap>
                <Icon
                  aria-label="حذف"
                  rounded="full"
                  cursor="pointer"
                  color="red"
                  as={IoClose}
                  onClick={() => onDeleteClick(experience.id)}
                />
                <Icon
                  aria-label="ویرایش"
                  cursor="pointer"
                  color="pink"
                  as={FiEdit3}
                  onClick={() => onEditClick(experience.id)}
                />
              </Wrap>
              <Text>{experience.title}</Text>
            </Wrap>
            {/* <Wrap fontSize="xs" align="center">
              <HiLocationMarker />
              <Text>{experience.place.name}</Text>
            </Wrap> */}
          </Stack>
          <Wrap spacing="0">
            {experience.activities?.edges.map((item) => (
              <ActivityCard
                key={item?.node?.id as string}
                svg={item?.node?.svg as string}
                title={item?.node?.titleFa as string}
                id={item?.node?.id as string}
                size={2}
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

export const EditTravelogueExperiences = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiEye />
        <Text fontWeight="extrabold">تجربه‌ها</Text>
        <AddEditButton onClick={props.onAddClick} mode="add" />
      </Wrap>
      <Stack spacing="2">
        {props.experiences?.map((item) => (
          <ExperienceCard
            onDeleteClick={props.onDeleteClick}
            onEditClick={props.onEditClick}
            key={item?.node?.id}
            experience={item?.node as ExperienceType}
            imageOnClick={props.imageOnClick}
          />
        ))}
      </Stack>
    </Stack>
  );
};
