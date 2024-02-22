import {
  Box,
  Button,
  ButtonGroup,
  Center,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import React from 'react';
import { formatMs, getCurrentLap, getElapsedTime, isRunning, StopwatchData } from 'utils';
import { isCompleted } from '../../utils/multiStopwatch/isCompleted';

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

interface LapDataProps {
  laps: number[];
  startTime: number;
  index: number;
}

const LapData = ({ laps, startTime, index }: LapDataProps) => (
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

interface RowControlsProps {
  sw: StopwatchData;
  stop: () => void;
  lap: () => void;
  index: number;
  remove: () => void;
}

const RowControls = ({ sw, stop, lap, index, remove }: RowControlsProps) => (
  <VStack spacing={2} m={0} p={1}>
    <Text fontSize={'lg'} as={'b'}>
      {index + 1}
    </Text>

    {/* If the stopwatch is running, show lap and stop buttons */}
    {/* If the stopwatch has not started, show remove button */}
    {/* If the stopwatch is complete, show none */}
    {isRunning(sw) ? (
      <ButtonGroup size={'md'} isAttached variant={'solid'}>
        <Button colorScheme={'blue'} isDisabled={!isRunning(sw)} onClick={lap}>
          Lap
        </Button>
        <Button colorScheme={'red'} isDisabled={!isRunning(sw)} onClick={stop}>
          Stop
        </Button>
      </ButtonGroup>
    ) : (
      !isCompleted(sw) && (
        <IconButton
          colorScheme={'red'}
          onClick={remove}
          aria-label={'Start'}
          icon={<DeleteIcon />}
        />
      )
    )}
  </VStack>
);
