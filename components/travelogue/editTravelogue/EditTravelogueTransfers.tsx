import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonGroup,
  Center,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import { BiTransfer } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import {
  TransferType,
  TransferTypeEdge,
} from '../../../graphql/generated/types';
import AddEditButton from './AddEditButton';
interface Props {
  onAddButtonClick: () => void;
  onDeleteClick: any;
  transfers: TransferTypeEdge[];
}
interface CardProps extends TransferType {
  onDeleteClick: any;
  key?: React.Key | null | undefined;
}

function TravelogueTransferCard(props: CardProps) {
  const alert = useDisclosure();
  const cancelRef = React.useRef(null);

  return (
    <>
      <Flex
        justifyContent="space-between"
        borderRadius="full"
        bgColor={useColorModeValue('gray.100', 'gray.700')}
        fontSize="xs"
        h="2.2rem"
        align="center"
      >
        <Center h="2rem" w="2rem" borderRadius="full" bgColor="yellow.400">
          <Image
            filter={
              'invert(99%) sepia(99%) saturate(2%) hue-rotate(123deg) brightness(108%) contrast(100%)'
            }
            h="15"
            w="15"
            fallbackSrc="/images/placeholder.png"
            src={props.transferType?.svg!}
            alt=""
          />
        </Center>
        <Wrap align="center">
          <Text pl="1" pr="2">
            {props.src.name}
          </Text>
          <FiArrowLeft />
          <Text pl="4" pr="2">
            {props.destination.name}
          </Text>
          <IconButton
            aria-label="حذف"
            rounded="full"
            variant="ghost"
            colorScheme="red"
            icon={<IoClose />}
            onClick={alert.onOpen}
          />
        </Wrap>
      </Flex>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={alert.onClose}
        isOpen={alert.isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent rounded="none">
          <AlertDialogHeader fontSize="md">
            آیا می‌خواهید این آیتم رفت و آمد را حذف کنید؟
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody mt="2">
            <Flex
              justifyContent="space-between"
              borderRadius="full"
              bgColor={useColorModeValue('gray.100', 'gray.700')}
              fontSize="xs"
              h="2.2rem"
              align="center"
              w="fit-content"
            >
              <Center
                h="2rem"
                w="2rem"
                borderRadius="full"
                bgColor="yellow.400"
              >
                <Image
                  filter={
                    'invert(99%) sepia(99%) saturate(2%) hue-rotate(123deg) brightness(108%) contrast(100%)'
                  }
                  h="15"
                  w="15"
                  src={props.transferType?.svg!}
                  alt=""
                  fallbackSrc="/images/placeholder.png"
                />
              </Center>
              <Wrap align="center">
                <Text pl="1" pr="2">
                  {props.src.name}
                </Text>
                <FiArrowLeft />
                <Text pl="4" pr="2">
                  {props.destination.name}
                </Text>
              </Wrap>
            </Flex>
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup size="sm">
              <Button
                colorScheme="red"
                onClick={() => props.onDeleteClick(props.id)}
              >
                حذف
              </Button>
              <Button ref={cancelRef} onClick={alert.onClose}>
                انصراف
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default function EditTravelogueTransfers(props: Props) {
  return (
    <>
      <Stack>
        <Wrap align="center">
          <BiTransfer />
          <Text fontWeight="extrabold">رفت و آمد</Text>
          <AddEditButton onClick={props.onAddButtonClick} mode="add" />
        </Wrap>
        <Wrap>
          {props.transfers.map((item) => (
            <TravelogueTransferCard
              key={item.node?.id!}
              {...item?.node!}
              onDeleteClick={props.onDeleteClick}
            />
          ))}
        </Wrap>
      </Stack>
    </>
  );
}
