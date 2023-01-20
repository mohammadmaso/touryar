import {
  Button,
  Center,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FiArrowRight } from 'react-icons/fi';
interface Props {}

const DevelopingPortal = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Modal
      isOpen={true}
      onClose={() => null}
      size="3xl"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent rounded="none">
        <ModalBody>
          <Center flexDir="column">
            <Image
              src="/images/3911319.svg"
              alt="Developing"
              h="300px"
              w="500px"
              my="2"
              fallbackSrc="/images/placeholder.png"
            />
            <Text fontSize="xl" fontWeight="light">
              این صفحه در دست توسعه می‌باشد.
            </Text>
            <Divider my="2" />
            <Text fontSize="sm" textAlign="center">
              با عرض پوزش در حال توسعه این امکان هستیم و به محض انتشار در ورژن
              بعدی برنامه امکان استفاده را به اطلاع شما می‌رسانیم.
            </Text>
          </Center>
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button
            leftIcon={<FiArrowRight />}
            colorScheme="primary"
            variant="outline"
            onClick={() => router.back()}
          >
            بازگشت
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DevelopingPortal;
