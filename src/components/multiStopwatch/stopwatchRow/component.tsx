import { Center, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { formatMs, getCurrentLap, getElapsedTime, StopwatchData, StopwatchState } from 'utils';
import { LapData } from './lapData';
import { RowControls } from './rowControls';

interface StopwatchRowProps {
  sw: StopwatchData;
  index: number;
  stop: () => void;
  lap: () => void;
  remove: () => void;
  setName: (name: string) => void;
}

export const StopwatchRow = ({ sw, index, stop, lap, remove, setName }: StopwatchRowProps) => (
  <HStack spacing={0}>
    <RowControls sw={sw} stop={stop} lap={lap} index={index} remove={remove} setName={setName} />
    {sw.state !== StopwatchState.NOT_STARTED && (
      <>
        <CurrentTime sw={sw} />
        {sw.laps.map((_, i) => (
          <LapData key={i} laps={sw.laps} startTime={sw.startTime} index={sw.laps.length - i - 1} />
        ))}
      </>
    )}
  </HStack>
);

const CurrentTime = ({ sw }: { sw: StopwatchData }) => {
  const [now, setNow] = useState<number>(Date.now());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Center m={0} p={1}>
      <VStack spacing={0}>
        <Text fontSize={'sm'}>{sw.laps.length + 1}</Text>
        <Text fontSize={'md'} as={'b'}>
          {formatMs(getElapsedTime(sw, now))}
        </Text>
        <Text fontSize={'sm'}>{formatMs(getCurrentLap(sw, now))}</Text>
      </VStack>
    </Center>
  );
};
