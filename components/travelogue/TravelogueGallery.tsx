import { Stack, Wrap, Text } from '@chakra-ui/react';
import React from 'react';
import { FcGallery } from 'react-icons/fc';
import { FiHome, FiImage } from 'react-icons/fi';
import ImageGallery from 'react-image-gallery';
import { Maybe, TripImageType } from '../../graphql/generated/types';
import { IImage } from '../ImageGallery';
import ImageList from '../ImageList';

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
}

export const TravelogueGallery = (props: Props) => {
  return (
    <div>
      <Stack>
        <Wrap align="center">
          <FiImage />
          <Text fontWeight="extrabold">گالری</Text>
        </Wrap>
        <ImageList images={props.images} imageOnClick={props.imageOnClick} />
      </Stack>
    </div>
  );
};
