import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import MultiStopwatch from '../components/multiStopwatch';
import { Box } from '@chakra-ui/react';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box
      bgColor={'#1B1342'}
      color={'#F5EFED'}
      minHeight={'100vh'}
      width={'auto'}
      overflowX={'auto'}
    >
      <MultiStopwatch />
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
