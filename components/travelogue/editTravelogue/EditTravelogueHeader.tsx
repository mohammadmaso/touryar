import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  useDisclosure,
  Wrap,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  FiCheck,
  FiEdit3,
  FiEye,
  FiEyeOff,
  FiTrash2,
  FiX,
} from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import { TripDetailQuery } from '../../../graphql/generated/types';
import { useIsMineTrip } from '../../../hooks/useIsMineTrip';
import useIsSignedIn from '../../../hooks/useIsSignedIn';
import DeleteConfirmModal from '../../Modals/DeleteConfirmModal';
import EditInitTravelogue from './EditInitTravelogue';

interface Props {
  id: string;
  title: string | undefined;
  categories: any;
  author: any;
  days: string;
  date: any;
  country: string;
  province: string;
  actions: any;
  queries: any;
  likes: number;
  isLiked: boolean;
  isSaved: boolean;
  published: boolean;
  data: TripDetailQuery;
}

export function EditTravelogueHeader(props: Props) {
  const [stickyHeader, setStickyHeader] = useState(false);

  const [isSaved, setIsSaved] = useState(props.isSaved);
  const isMineTrip = useIsMineTrip(props.author?.username as string);

  const [isPublished, seIsPublished] = useState(props.published);

  const editeInitModal = useDisclosure();
  const deleteModal = useDisclosure();

  const { goToSignUp, isSignedIn } = useIsSignedIn();

  const handlePublishClick = () => {
    if (!isPublished) {
      props.actions.publishTrip().then(() => seIsPublished(true));
    } else {
      props.actions.unPublishTrip().then(() => seIsPublished(false));
    }
  };

  // const handleScroll = () => {
  //   if (window.pageYOffset > 120) {
  //     if (!stickyHeader) {
  //       setStickyHeader(true);
  //     }
  //   } else {
  //     if (stickyHeader) {
  //       setStickyHeader(false);
  //     }
  //   }
  // };
  // useEventListener('scroll', handleScroll);

  return (
    <>
      <Stack
        // position={stickyHeader ? 'fixed' : undefined}
        pt={'2'}
        pb={'2'}
        // boxShadow={stickyHeader ? 'md' : '0'}
        // bgColor={stickyHeader ? 'white' : 'transparent'}
        zIndex="90"
        // top={stickyHeader ? '60px' : undefined}
        w="full"
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
      >
        <Stack>
          <Wrap>
            {isMineTrip ? (
              isPublished ? (
                <Tag colorScheme="green">
                  <Icon ml="1" as={FiCheck} />
                  منتشر شده
                </Tag>
              ) : (
                <Tag colorScheme="red">
                  <Icon ml="1" as={FiX} />
                  منتشر نشده
                </Tag>
              )
            ) : null}
            <Text as="h1" fontSize="xl" fontWeight="semibold">
              {props.title}
            </Text>
          </Wrap>
          <Wrap
            direction={{
              base: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
            }}
            fontWeight="light"
            fontSize="sm"
          >
            <HStack w="fit-content" align={'center'}>
              <Avatar
                src={props.author?.avatar}
                // alt={props.author?.username}
                size="sm"
                ml="2"
              />
              <Text fontWeight={300} fontSize="sm" dir="ltr">
                {props.author?.username}
              </Text>
            </HStack>
            <Wrap>
              {props.categories?.map((item: any) => (
                <Tag key={item.node.id} colorScheme="primary">
                  {item.node.title}
                </Tag>
              ))}
            </Wrap>

            <Wrap>
              <Wrap align="center">
                <TimeIcon ml="1" />
                <Text>{props.days}</Text>
              </Wrap>
              <Divider orientation="vertical" />
              <Wrap align="center">
                <CalendarIcon ml="1" />
                <Text>{props.date}</Text>
              </Wrap>
              <Divider orientation="vertical" />
              <Wrap align="center">
                <HiLocationMarker />
                <Text>{`${props.country} - ${props.province}`}</Text>
              </Wrap>
            </Wrap>
          </Wrap>
          <Button
            colorScheme="primary"
            variant="ghost"
            leftIcon={<FiEdit3 />}
            fontWeight="light"
            fontSize="sm"
            onClick={editeInitModal.onOpen}
            w="fit-content"
          >
            ویرایش اطلاعات اولیه تور
          </Button>
        </Stack>
        <Wrap align="center">
          <ButtonGroup>
            <Button
              colorScheme="primary"
              variant="ghost"
              isDisabled={
                props.queries?.publishTripStatus?.loading ||
                props.queries?.unPublishTripStatus?.loading
              }
              size="sm"
              rounded="sm"
              leftIcon={isPublished ? <FiEyeOff /> : <FiEye />}
              onClick={handlePublishClick}
            >
              {isPublished ? 'عدم انتشار' : 'انتشار'}
            </Button>
            <IconButton
              size="sm"
              colorScheme="red"
              aria-label="حذف سفرنامه"
              onClick={deleteModal.onOpen}
              rounded="sm"
              variant="ghost"
              icon={<FiTrash2 />}
            />
          </ButtonGroup>
        </Wrap>
      </Stack>
      <DeleteConfirmModal
        {...deleteModal}
        title={props.title}
        status={props.queries?.deleteTripStatus}
        deleteAction={props.actions?.deleteTrip}
      />
      <EditInitTravelogue
        data={props.data}
        actions={{
          updateTrip: props.actions.updateTrip,
          getProvincesOfCountry: props.actions.getProvincesOfCountry,
        }}
        queries={props.queries}
        {...editeInitModal}
      />
    </>
  );
}
