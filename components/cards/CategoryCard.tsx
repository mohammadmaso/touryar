import { Box, Center, Image, Text, useColorModeValue } from '@chakra-ui/react';

export default function CategoryCard(props: any) {
  return (
    <Center m={2}>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        overflow={'hidden'}
        h={'150px'}
        minW={'210px'}
        position="relative"
        transition={'all .3s ease'}
        _hover={{ transform: 'scale(1.1,1.1)' }}
      >
        <Image
          alt={props.title}
          src={props.image}
          objectFit={'cover'}
          objectPosition="top"
          fallbackSrc="/images/placeholder.png"
        />
        <Center
          position="absolute"
          bottom="0"
          right="0"
          bgGradient="linear(to-t, #000000cc,#ffffff00)"
          height="100%"
          width="full"
          // align="flex-end"
        >
          <Text
            width="full"
            textAlign="center"
            fontWeight="extrabold"
            fontSize="lg"
            color={'white'}
            p="3"
          >
            {props.title}
          </Text>
        </Center>
      </Box>
    </Center>
  );
}
