import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import { FiShoppingBag } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { AccessoryTypeEdge } from '../../../graphql/generated/types';
import AddEditButton from './AddEditButton';

interface Props {
  accessories: AccessoryTypeEdge[];
  onAddButtonClick: () => void;
  onDeleteClick: any;
}

function AccessoryCard(props: any) {
  return (
    <Box boxShadow="md" p="2" rounded="md" fontSize="sm" fontWeight="light">
      <Stack spacing="3">
        <Flex justifyContent="space-between">
          <IconButton
            aria-label="حذف"
            rounded="full"
            variant="ghost"
            colorScheme="red"
            icon={<IoClose />}
            onClick={() => props.onDeleteClick(props.id)}
          />
          <Image
            h="1rem"
            fit="contain"
            src="/images/Digikala.png"
            alt="digikala"
            fallbackSrc="/images/placeholder.png"
          />
        </Flex>

        <Image
          fit="contain"
          w="full"
          src={props.imageLink}
          alt="accessories"
          fallbackSrc="/images/placeholder.png"
        />
        <Text px="3">{props.name}</Text>
        <Button
          size="sm"
          fontWeight="light"
          variant="outline"
          colorScheme="red"
          leftIcon={<FiShoppingBag />}
        >
          خرید در دیجیکالا
        </Button>
      </Stack>
    </Box>
  );
}

const EditTravelogueAccessories = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiShoppingBag />
        <Text fontWeight="extrabold">تجهیزات</Text>
        <AddEditButton onClick={props.onAddButtonClick} mode="add" />
      </Wrap>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing="5">
        {props.accessories.map((item) => (
          <AccessoryCard
            key={item?.node?.id}
            {...item.node}
            onDeleteClick={props.onDeleteClick}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default EditTravelogueAccessories;
