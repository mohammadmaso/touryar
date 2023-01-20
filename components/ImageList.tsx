import { SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import ImageCard from './ImageCard';
import { IImage } from './ImageGallery';

interface Props {
  images: IImage[];
  imageOnClick: any;
}

const ImageList = (props: Props) => {
  return (
    <SimpleGrid
      spacing="3"
      columns={{ base: 2, sm: 2, md: 4 }}
      // justifyContent="center"
      justifyContent="center"
    >
      {props.images.map((item: any) => (
        <ImageCard
          key={item.id}
          id={item.id}
          image={item.image}
          imageOnClick={props.imageOnClick}
        />
      ))}
    </SimpleGrid>
  );
};

export default ImageList;
