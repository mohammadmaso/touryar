import { Stack, Text, Wrap } from '@chakra-ui/react';
import { FiFeather } from 'react-icons/fi';

interface Props {
  description: string;
}

export function TravelogueDescription(props: Props) {
  return (
    <Stack>
      <Wrap align="center">
        <FiFeather />
        <Text fontWeight="extrabold">خلاصه تور</Text>
      </Wrap>
      <Wrap>
        <Text fontSize="sm" lineHeight="7" whiteSpace="pre-line">
          {props.description}
        </Text>
      </Wrap>
    </Stack>
  );
}
