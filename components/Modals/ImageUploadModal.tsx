import React, { useRef, useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Stack,
  Icon,
  Wrap,
  Center,
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  Box,
  useToast,
  Divider,
} from '@chakra-ui/react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { BiCommentAdd } from 'react-icons/bi';
import { useMeFollowingsQuery } from '../../graphql/generated/types';
import ApiLoading from '../ApiLoading';
import UserSimpleListCard from '../cards/UserSimpleListCard';

import * as Yup from 'yup';
import { FiCheck } from 'react-icons/fi';
import { dataURItoBlob } from '../../utils/dataToBlob';

interface Props {
  isOpen: boolean;
  onClose: any;
  defaultImageSrc: string;
  title?: string;
  aspectRatio: number;
  loading: boolean;
  onUpload: (file: Blob) => void;
}

const ImageUploadModal = (props: Props) => {
  const toast = useToast();

  const [image, setImage] = useState();
  const [cropData, setCropData] = useState('#');
  const [isCroped, setIsCroped] = useState(false);
  const [cropper, setCropper] = useState<any>();

  const inputImageRef = useRef<HTMLInputElement>(null);

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    setIsCroped(false);
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      console.log(cropper.getCroppedCanvas().toDataURL());
      setIsCroped(true);
    }
  };

  const onSelectButtonClick = () => {
    // `current` points to the mounted file input element
    inputImageRef?.current?.click();
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size="lg"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent rounded="none">
        <ModalHeader fontWeight="light">{props.title}</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Divider />
          <input
            accept="image/*"
            type="file"
            id="file"
            ref={inputImageRef}
            style={{ display: 'none' }}
            onChange={onChange}
          />
          <Stack>
            <Cropper
              style={{
                opacity: '1',
                width: '100%',
                borderRadius: '10px',
              }}
              zoomTo={0.5}
              initialAspectRatio={1}
              // preview=".img-preview"
              src={image}
              viewMode={1}
              aspectRatio={props.aspectRatio}
              minCropBoxHeight={50}
              minCropBoxWidth={50}
              background={true}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              onInitialized={(instance) => {
                setCropper(instance);
              }}
              cropstart={() => setIsCroped(false)}
              guides={true}
            />
            <Wrap>
              <Button
                variant="solid"
                size="sm"
                rounded="full"
                isLoading={false}
                onClick={onSelectButtonClick}
              >
                انتخاب تصویر
              </Button>
              <Button
                variant="solid"
                size="sm"
                rounded="full"
                mt="-12"
                opacity="0.8"
                colorScheme={isCroped ? 'primary' : 'gray'}
                onClick={getCropData}
                isDisabled={image == null ? true : false}
              >
                برش تصویر
                {isCroped && <Icon as={FiCheck} mr="1" />}
              </Button>
            </Wrap>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Wrap>
            <Button
              isLoading={props.loading}
              colorScheme="primary"
              variant="ghost"
              size="sm"
              onClick={() => props.onUpload(dataURItoBlob(cropData))}
            >
              ثبت
            </Button>
            <Button
              onClick={props.onClose}
              colorScheme="red"
              variant="ghost"
              size="sm"
            >
              انصراف
            </Button>
          </Wrap>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImageUploadModal;
