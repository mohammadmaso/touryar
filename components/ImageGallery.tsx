import { IconButton } from '@chakra-ui/button';
import { CloseButton } from '@chakra-ui/close-button';
import { Image } from '@chakra-ui/image';
import { Center, HStack, Stack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { UserType } from '../graphql/generated/types';
import ImageCard from './ImageCard';

export type IImage = {
  id: string;
  image: string;
  description: string;
  location?: { lat: number; lan: number };
};

interface Props {
  images: Array<IImage>;
  user: Pick<UserType, 'id' | 'username' | 'avatar'> | undefined;
  imageIdToShow: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isControlled: boolean;
  getButtonProps: (props?: any) => any;
  getDisclosureProps: (props?: any) => any;
}

const ImageGallery = ({ images, ...rest }: Props) => {
  const [imageIdToShow, setImageIdToShow] = useState<string>(
    rest.imageIdToShow
  );
  const [imageToShow, setImageToShow] = useState<IImage>(
    images.filter((item) => item.id == imageIdToShow)[0]
  );

  useEffect(() => {
    setImageToShow(images.filter((item) => item.id === rest.imageIdToShow)[0]);
  }, [images, rest.imageIdToShow, rest.isOpen]);

  useEffect(() => {
    setImageToShow(images.filter((item) => item.id === imageIdToShow)[0]);
  }, [imageIdToShow, images]);

  useEffect(() => {
    if (rest.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [rest.isOpen]);

  const showImage = (id: string) => {
    //set imageToShow to be the one that's been clicked on
    setImageIdToShow(id);
    //set lightbox visibility to true
  };

  const showNext = (e: any) => {
    e.stopPropagation();
    if (images) {
      let currentIndex = images.indexOf(imageToShow);
      if (currentIndex >= images.length - 1) {
        onclose;
      } else {
        let nextImage = images[currentIndex + 1];
        setImageIdToShow(nextImage.id);
      }
    }
  };

  const showPrev = (e: any) => {
    e.stopPropagation();
    if (images) {
      let currentIndex = images.indexOf(imageToShow);
      if (currentIndex <= 0) {
        onclose;
      } else {
        let nextImage = images[currentIndex - 1];
        setImageIdToShow(nextImage.id);
      }
    }
  };

  return (
    <>
      {rest.isOpen ? (
        <Stack
          zIndex="100"
          position="fixed"
          top="0"
          left="0"
          width="full"
          height="full"
          id="lightbox"
          bgColor="rgba(0, 0, 0, 0.89)"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          <CloseButton
            cursor="pointer"
            onClick={rest.onClose}
            color="white"
            position="fixed"
            top="20px"
            right="20px"
          />
          <Center flexDir="column" pb="4">
            <Stack justifyContent="center" alignItems="center">
              <Image
                h="70vh"
                rounded="sm"
                alt={imageToShow?.description}
                id="lightbox-img"
                src={imageToShow?.image}
                objectFit="contain"
                fallbackSrc="/images/placeholder.png"
              />
              <div>
                <IconButton
                  aria-label="قبلی"
                  h="6"
                  w="6"
                  color="white"
                  variant="ghost"
                  as={FiArrowRight}
                  onClick={showPrev}
                  colorScheme="whiteAlpha"
                />
                <IconButton
                  aria-label="بعدی"
                  h="6"
                  w="6"
                  color="white"
                  colorScheme="whiteAlpha"
                  variant="ghost"
                  as={FiArrowLeft}
                  onClick={showNext}
                />
              </div>
            </Stack>
            {/* <Text
              w={{ base: '90vw', sm: '90vw', md: '50vw', lg: '50vw' }}
              textAlign="center"
              color="white"
              mt="3"
              mb="3"
            >
              {imageToShow?.description}
            </Text> */}
          </Center>

          <HStack
            justifyContent="center"
            h={{ base: '5vh', sm: '10vh', md: '10vh', lg: '10vh' }}
            bottom="10px"
            overflowY="auto"
            overflowX="hidden"
          >
            {images.map((item) => (
              <ImageCard
                ImageProps={{
                  h: { base: '5vh', sm: '10vh', md: '10vh', lg: '10vh' },
                }}
                key={item.id}
                id={item.id}
                image={item.image}
                imageOnClick={(imageId) => showImage(imageId)}
              />
            ))}
          </HStack>
        </Stack>
      ) : (
        ''
      )}
    </>
  );
};

export default ImageGallery;
