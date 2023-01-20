import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Wrap,
} from '@chakra-ui/react';

export default function CallToActionCreateGroupTrip() {
  return (
    <Flex
      w={'full'}
      h={'30vh'}
      rounded="md"
      backgroundImage={'url(/images/angelo-pantazis-zXVk8mNl9M0-unsplash.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justifyContent={'center'}
        align="flex-start"
        bgGradient={'linear(to-l, blackAlpha.900, transparent)'}
        rounded="md"
      >
        <Stack
          align={'flex-start'}
          spacing={4}
          // px={useBreakpointValue({ base: 4, md: 8 })}
          py="6"
        >
          <Stack>
            <Text
              color={'white'}
              fontWeight={400}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            >
              دنبال همسفر می‌گردی؟
            </Text>
            <Text color={'white'}>
              اینجا می‌تونی همراه‌‌های سفر بعدیت رو پیدا کنی..
            </Text>
          </Stack>
          <Wrap>
            <Button colorScheme="primary" rounded={'full'}>
              جستجو میان سفرهای گروهی
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
            >
              ساختن یک برنامه سفر
            </Button>
          </Wrap>
        </Stack>
      </VStack>
    </Flex>
  );
}
