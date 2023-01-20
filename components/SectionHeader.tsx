import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';

interface Props {
  title: string;
  subTitle?: string;
}

const SectionHeader = (props: Props) => {
  return (
    <Box
      borderRightWidth="3px"
      borderRight="#009d21"
      borderRightStyle="solid"
      paddingRight="3"
    >
      <Stack spacing="0">
        <Text textColor="gray.700" fontSize="xl" fontWeight="700" ml={3}>
          {props.title}‌
        </Text>
        {props.subTitle && (
          <Text textColor="gray.700" fontSize="md" fontWeight="400" ml={3}>
            {props.subTitle}‌
          </Text>
        )}
      </Stack>
    </Box>
  );
};

export default SectionHeader;
