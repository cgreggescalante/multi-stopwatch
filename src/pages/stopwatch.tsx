import React from 'react';
import { useLocation } from '@reach/router';
import { Box } from '@chakra-ui/react';
import MultiStopwatchComponent from '../components/multiStopwatch';

const StopwatchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  if (!id) return null;

  return (
    <Box
      bgColor={'#1B1342'}
      color={'#F5EFED'}
      minHeight={'100vh'}
      width={'auto'}
      overflowX={'auto'}
    >
      <MultiStopwatchComponent id={id} />
    </Box>
  );
};

export default StopwatchPage;
