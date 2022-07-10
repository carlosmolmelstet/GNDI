import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import { Header } from './Header';
import { LayoutProps } from './types';

export function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Box w="100%">{children}</Box>
      </Flex>
    </>
  );
}
