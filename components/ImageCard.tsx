import { Image } from '@chakra-ui/image';
import { ImageProps } from '@chakra-ui/react';
import React from 'react';

interface Props {
  image: any;
  id: any;
  imageOnClick: (imageId: string) => void;
  style?: React.CSSProperties | undefined;
  ImageProps?: ImageProps;
}

const ImageCard = ({ image, imageOnClick, id, style, ImageProps }: Props) => {
  return (
    <>
      <Image
        rounded="sm"
        className="image-card"
        onClick={() => imageOnClick(id)}
        src={image}
        alt={'تصویر'}
        style={style}
        height="5rem"
        width="7rem"
        objectFit="cover"
        {...ImageProps}
        transition={'all .3s ease'}
        _hover={{ transform: 'scale(1.1,1.1)' }}
        cursor="zoom-in"
        fallbackSrc="/images/placeholder.png"
      />
    </>
  );
};

export default ImageCard;
