import { Stack, Text, Wrap } from '@chakra-ui/react';
import { FiFeather } from 'react-icons/fi';
import AddEditButton from './AddEditButton';

interface Props {
  description: string;
  onAddButtonClick: any;
}

export function EditTravelogueDescription(props: Props) {
  return (
    <Stack>
      <Wrap align="center">
        <FiFeather />
        <Text fontWeight="extrabold">خلاصه تور</Text>
        <AddEditButton onClick={props.onAddButtonClick} mode="edit" />
      </Wrap>
      <Wrap>
        <Text fontSize="sm" lineHeight="7">
          {props.description}
        </Text>
      </Wrap>
    </Stack>
  );
}
