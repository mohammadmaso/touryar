import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import MainFooter from '../components/footers/MainFooter';
import NavBarView from '../views/NavBarView';
// import NavBarView from '../views/NavBarView';

type Props = {
  children: React.ReactNode;
  subNav?: React.ReactNode;
  title?: string;
} & typeof defaultProps;

const defaultProps = {
  title: 'راهکار جامع گردشگری',
};

const BaseLayout = (props: Props): ReactElement => {
  return (
    <>
      <Head>
        <title>{`توریار | ${props.title} `}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarView />

      {props.subNav}
      <Box
        height={{
          base: '60px',
          sm: '60px',
          md: '100',
          lg: '100px',
          xl: '100px',
        }}
      />
      <Box minHeight="78vh" px={{ base: 4, sm: 4, md: 120, lg: 120 }}>
        {props.children}
      </Box>
      <Box
        height={{
          base: '60px',
          sm: '60px',
          md: '100',
          lg: '100px',
          xl: '100px',
        }}
      />
      <MainFooter />
    </>
  );
};

BaseLayout.defaultProps = defaultProps;

export default BaseLayout;
