import { hasStarted, isCompleted, isRunning, StopwatchData } from 'utils';
import { Button, ButtonGroup, IconButton, Input, Text, VStack } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import React from 'react';

interface RowControlsProps {
  sw: StopwatchData;
  stop: () => void;
  lap: () => void;
  index: number;
  remove: () => void;
  setName: (name: string) => void;
}

export const RowControls = ({ sw, stop, lap, remove, setName }: RowControlsProps) => {
  // Before Starting the stopwatch, show the name input and remove button
  if (!hasStarted(sw))
    return (
      <>
        <Input size={'md'} value={sw.name} onChange={e => setName(e.target.value)} />
        <IconButton
          colorScheme={'red'}
          onClick={remove}
          aria-label={'Start'}
          icon={<DeleteIcon />}
        />
      </>
    );

  // When the stopwatch is running, display name and lap/stop buttons
  if (isRunning(sw))
    return (
      <VStack spacing={2} m={0} p={1}>
        <Text fontSize={'lg'} as={'b'}>
          {sw.name}
        </Text>

        <ButtonGroup size={'md'} isAttached variant={'solid'}>
          <Button colorScheme={'blue'} isDisabled={!isRunning(sw)} onClick={lap}>
            Lap
          </Button>
          <Button colorScheme={'red'} isDisabled={!isRunning(sw)} onClick={stop}>
            Stop
          </Button>
        </ButtonGroup>
      </VStack>
    );

  // When the stopwatch is completed, display name
  return (
    <VStack spacing={2} m={0} p={1}>
      <Text fontSize={'lg'} as={'b'}>
        {sw.name}
      </Text>
    </VStack>
  );
};
