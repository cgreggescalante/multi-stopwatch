import { Center, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { formatMs, getCurrentLap, getElapsedTime, StopwatchData } from 'utils';
import { LapData } from './lapData';
import { RowControls } from './rowControls';

interface StopwatchRowProps {
  sw: StopwatchData;
  index: number;
  stop: () => void;
  lap: () => void;
  start: () => void;
  now: number;
  remove: () => void;
}

export const StopwatchRow = ({ sw, index, stop, lap, now, remove }: StopwatchRowProps) => (
  <HStack spacing={0}>
    <RowControls sw={sw} stop={stop} lap={lap} index={index} remove={remove} />
    <Center m={0} p={1}>
      <VStack spacing={0}>
        <Text fontSize={'sm'}>{sw.laps.length + 1}</Text>
        <Text fontSize={'md'} as={'b'}>
          {formatMs(getElapsedTime(sw, now))}
        </Text>
        <Text fontSize={'sm'}>{formatMs(getCurrentLap(sw, now))}</Text>
      </VStack>
    </Center>
    {sw.laps.map((_, i) => (
      <LapData key={i} laps={sw.laps} startTime={sw.startTime} index={sw.laps.length - i - 1} />
    ))}
  </HStack>
);
