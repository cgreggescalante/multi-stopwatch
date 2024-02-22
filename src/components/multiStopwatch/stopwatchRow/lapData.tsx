import { Box, Center, Text, VStack } from '@chakra-ui/react';
import { formatMs } from 'utils';
import React from 'react';

interface LapDataProps {
  laps: number[];
  startTime: number;
  index: number;
}

export const LapData = ({ laps, startTime, index }: LapDataProps) => (
  <Box m={0} p={1}>
    <Center>
      <VStack spacing={0}>
        <Text fontSize={'sm'}>{index + 1}</Text>
        <Text fontSize={'md'} as={'b'}>
          {formatMs(laps[index] - startTime)}
        </Text>
        <Text fontSize={'sm'}>{formatMs(laps[index] - (index ? laps[index - 1] : startTime))}</Text>
      </VStack>
    </Center>
  </Box>
);