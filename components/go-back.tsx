import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

const GoBack = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.back()}>بازگشت</Button>
    </>
  );
};

export default GoBack;
