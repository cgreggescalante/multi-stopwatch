import { StopwatchData, StopwatchState } from 'utils';
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
  switch (sw.state) {
    case StopwatchState.NOT_STARTED:
      return (
        <>
          <Input
            maxWidth={'20ch'}
            size={'md'}
            value={sw.name}
            onChange={e => setName(e.target.value)}
          />
          <IconButton
            colorScheme={'red'}
            onClick={remove}
            aria-label={'Start'}
            icon={<DeleteIcon />}
          />
        </>
      );
    case StopwatchState.RUNNING:
      return (
        <VStack spacing={2} m={0} p={1}>
          <Text fontSize={'lg'} as={'b'}>
            {sw.name}
          </Text>

          <ButtonGroup size={'md'} isAttached variant={'solid'}>
            <Button colorScheme={'blue'} onClick={lap}>
              Lap
            </Button>
            <Button colorScheme={'red'} onClick={stop}>
              Stop
            </Button>
          </ButtonGroup>
        </VStack>
      );
    case StopwatchState.COMPLETED:
      return (
        <VStack spacing={2} m={0} p={1}>
          <Text fontSize={'lg'} as={'b'}>
            {sw.name}
          </Text>
        </VStack>
      );
  }
};
