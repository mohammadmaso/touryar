import { Stack, Wrap, Text } from '@chakra-ui/react';
import React from 'react';
import { FcGallery } from 'react-icons/fc';
import { FiHome, FiImage } from 'react-icons/fi';
import ImageGallery from 'react-image-gallery';
import { Maybe, TripImageType } from '../../../graphql/generated/types';
import { IImage } from '../../ImageGallery';
import ImageList from '../../ImageList';
import AddEditButton from './AddEditButton';

// const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     description: 'این یک ویدیو آزمایشی است ',
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//   },
// ];
interface Props {
  images: IImage[];
  imageOnClick: any;
  onAddButtonClick: any;
}

export const EditTravelogueGallery = (props: Props) => {
  return (
    <div>
      <Stack>
        <Wrap align="center">
          <FiImage />
          <Text fontWeight="extrabold">گالری</Text>
          <AddEditButton onClick={props.onAddButtonClick} mode="edit" />
        </Wrap>
        <ImageList images={props.images} imageOnClick={props.imageOnClick} />
      </Stack>
    </div>
  );
};
