import { isCompleted, isRunning, StopwatchData } from 'utils';
import { Button, ButtonGroup, IconButton, Text, VStack } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import React from 'react';

interface RowControlsProps {
  sw: StopwatchData;
  stop: () => void;
  lap: () => void;
  index: number;
  remove: () => void;
}

export const RowControls = ({ sw, stop, lap, index, remove }: RowControlsProps) => (
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