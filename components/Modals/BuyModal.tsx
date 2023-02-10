import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import Link from 'next/link';

interface Props {}

const BuyModal = (props: any) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent rounded="none">
        <ModalHeader>خرید تور</ModalHeader>
        <ModalCloseButton />
        <ModalBody>خرید تور به قیمت ۱۰۰.۰۰۰ تومان</ModalBody>

        <ModalFooter>
          <Link href={'/payment/success'}>
            <Button
              width={'full'}
              colorScheme="primary"
              mr={3}
              onClick={props.onClose}
            >
              شبیه‌سازی پرداخت موفق
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BuyModal;
