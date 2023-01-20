import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import MinimalFooter from '../components/footers/MinimalFooter';
import MinimalNavBarView from '../views/MinimalNavBarView';
// import NavBarView from '../views/NavBarView';

type Props = {
  children: React.ReactNode;
  title?: string;
  selected: string;
} & typeof defaultProps;

const defaultProps = {
  title: 'توریار | راهکار جامع گردشگری',
};

const MinimalLayout = (props: Props): ReactElement => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MinimalNavBarView selected={props.selected} />
      <Box height="15vh" />
      <Box minHeight="78vh" px={[2, 2, 120]}>
        {props.children}
      </Box>
      <MinimalFooter />
    </>
  );
};

MinimalLayout.defaultProps = defaultProps;

export default MinimalLayout;
