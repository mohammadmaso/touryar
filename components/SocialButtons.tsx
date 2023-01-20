import { Grid, Wrap, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import {
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

interface Props {}

export const SocialButtons = (props: Props) => {
  return (
    <Wrap cursor="pointer">
      <Link href="http://twitter.com/mytripper_ir" passHref>
        <Icon as={AiOutlineTwitter} color="gray.500" />
      </Link>
      {/* <AiOutlineWhatsApp /> */}
      <Link href="https://t.me/mytripper" passHref>
        <Icon as={FaTelegram} color="gray.500" />
      </Link>
      <Link href="http://instagram.com/mytripper.ir" passHref>
        <Icon as={AiOutlineInstagram} color="gray.500" />
      </Link>
    </Wrap>
  );
};
