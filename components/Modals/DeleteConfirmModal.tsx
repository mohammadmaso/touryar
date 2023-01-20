import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useToast,
  Wrap,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: any;
  deleteAction: any;
  title?: string;
  status: any;
}

const DeleteConfirmModal = (props: Props) => {
  const toast = useToast();

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
        <ModalHeader fontWeight="light">
          {/* <Wrap align="center">
            <Icon as={FiTrash} />
            <Text>حذف سفرنامه؟</Text>
          </Wrap> */}
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Stack>
            <Text>آیا از حذف این تور مطمعن هستید؟</Text>
            <Text fontWeight="semibold">{props?.title}</Text>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Wrap>
            <Button
              isLoading={props.status.loading}
              colorScheme="red"
              variant="solid"
              size="sm"
              onClick={() => props.deleteAction()}
            >
              بله، حذف کن
            </Button>
            <Button onClick={props.onClose} variant="ghost" size="sm">
              انصراف
            </Button>
          </Wrap>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteConfirmModal;
