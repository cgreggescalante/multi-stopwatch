import { Button, ButtonGroup, Center, Td, Text, Tr, VStack } from '@chakra-ui/react';
import React from 'react';
import { formatMs, getCurrentLap, getElapsedTime, isRunning, StopwatchData } from 'utils';

interface StopwatchRowProps {
  sw: StopwatchData;
  index: number;
  stop: () => void;
  lap: () => void;
  start: () => void;
  now: number;
  remove: () => void;
}

export const StopwatchRow = ({ sw, index, stop, lap, start, now, remove }: StopwatchRowProps) => (
  <Tr key={index}>
    <Td>
      <VStack spacing={2}>
        <Text fontSize={'lg'} as={'b'}>
          {index + 1}
        </Text>
        <ButtonGroup size={'md'} isAttached variant={'solid'}>
          {isRunning(sw) ? (
            <>
              <Button colorScheme={'blue'} isDisabled={!isRunning(sw)} onClick={lap}>
                Lap
              </Button>
              <Button colorScheme={'red'} isDisabled={!isRunning(sw)} onClick={stop}>
                Stop
              </Button>
            </>
          ) : (
            <ButtonGroup isAttached variant={'solid'}>
              <Button colorScheme={'green'} isDisabled={isRunning(sw)} onClick={start}>
                Start
              </Button>
              <Button colorScheme={'red'} onClick={remove}>
                Remove
              </Button>
            </ButtonGroup>
          )}
        </ButtonGroup>
      </VStack>
    </Td>
    <Td>
      <Center>
        <VStack spacing={0}>
          <Text fontSize={'sm'}>{sw.laps.length + 1}</Text>
          <Text fontSize={'md'} as={'b'}>
            {formatMs(getElapsedTime(sw, now))}
          </Text>
          <Text fontSize={'sm'}>{formatMs(getCurrentLap(sw, now))}</Text>
        </VStack>
      </Center>
    </Td>
    {sw.laps.map((_, i) => (
      <LapData key={i} laps={sw.laps} startTime={sw.startTime} index={sw.laps.length - i - 1} />
    ))}
  </Tr>
);

interface LapDataProps {
  laps: number[];
  startTime: number;
  index: number;
}

const LapData = ({ laps, startTime, index }: LapDataProps) => (
  <Td>
    <Center>
      <VStack spacing={0}>
        <Text fontSize={'sm'}>{index + 1}</Text>
        <Text fontSize={'md'} as={'b'}>
          {formatMs(laps[index] - startTime)}
        </Text>
        <Text fontSize={'sm'}>{formatMs(laps[index] - (index ? laps[index - 1] : startTime))}</Text>
      </VStack>
    </Center>
  </Td>
);
