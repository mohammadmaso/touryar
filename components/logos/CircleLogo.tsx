import { Box, Image } from '@chakra-ui/react';
import Link from 'next/link';

type Props = {
  height?: number;
  width?: number;
};
export default function CircleLogo(props: Props) {
  return (
    <Link href={'/'} passHref>
      <Box {...props} cursor="pointer">
        <Image
          src={'/CircleLogo.svg'}
          height={props.height ?? 20}
          width={props.width ?? 20}
          alt="Logo"
        />
      </Box>
    </Link>
  );
}
