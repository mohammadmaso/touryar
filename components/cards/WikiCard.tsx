import {
  Avatar,
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function WikiCard(props: any) {
  return (
    <Link href={`/articles/${props.id}`} passHref>
      <Center py={6} m={3} textAlign="right" cursor="pointer">
        <Box
          bg={useColorModeValue('white', 'gray.900')}
          w={'full'}
          // boxShadow={'md'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
          transition={'all .3s ease'}
          _hover={{ transform: 'scale(1.1,1.1)' }}
          minHeight="24"
        >
          <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
            <Image
              alt="l"
              src={props?.image as string}
              height="200px"
              w="full"
              objectFit={'cover'}
              fallbackSrc="/images/placeholder.png"
            />
          </Box>
          <Flex direction="column" justifyContent="center">
            <Stack spacing="3">
              <Tag
                colorScheme="green"
                textTransform={'uppercase'}
                fontWeight={400}
                fontSize={'sm'}
                p="2"
                w="fit-content"
              >
                {props?.category.title}
              </Tag>
              <Text noOfLines={3} fontWeight="extrabold" fontSize={'sm'}>
                {props?.title}
              </Text>
              <Text colorScheme="gray" fontSize="xs">
                {props?.shortDescription.substring(0, 200) + ' ...'}
              </Text>
            </Stack>
            <HStack fontSize="xs" w="full" mt={6} spacing={1} align={'center'}>
              <Avatar
                size="sm"
                src={props?.author.avatar}
                // alt={props?.author}
              />
              <Stack direction={'column'} spacing={0}>
                <Text fontWeight={600}>{props?.author.username}</Text>
                <Text color={'gray.500'} dir="rtl">
                  {props?.timeToRead} دقیقه برای خواندن
                </Text>
              </Stack>
            </HStack>
          </Flex>
        </Box>
      </Center>
    </Link>
  );
}
