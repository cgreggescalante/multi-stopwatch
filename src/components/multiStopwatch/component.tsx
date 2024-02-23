import React from 'react';
import { Box, Button, ButtonGroup, Center, IconButton, VStack } from '@chakra-ui/react';
import { StopwatchRow } from './stopwatchRow';
import { anyRunning, StopwatchState, useMultiStopwatch } from 'utils';
import { AddIcon } from '@chakra-ui/icons';

const MultiStopwatchComponent = ({ id }: { id: string }) => {
  const {
    createStopwatch,
    removeStopwatch,
    stopwatches,
    stopAll,
    stop,
    startAll,
    resetAll,
    lap,
    setName,
  } = useMultiStopwatch(id);

  return (
    <Box m={1}>
      {/* Controls */}
      <Center mb={2} mt={2}>
        <ButtonGroup isAttached variant={'solid'}>
          <Button colorScheme={'green'} onClick={() => startAll()}>
            Start All
          </Button>
          <Button
            isDisabled={!anyRunning(stopwatches)}
            colorScheme={'red'}
            onClick={() => stopAll()}
          >
            Stop All
          </Button>
          <Button colorScheme={'yellow'} onClick={() => resetAll()}>
            Reset All
          </Button>
        </ButtonGroup>
      </Center>

      <VStack align={'flex-start'} spacing={0}>
        {stopwatches.map((sw, index) => (
          <StopwatchRow
            key={index}
            sw={sw}
            index={index}
            stop={() => stop(index)}
            lap={() => lap(index)}
            remove={() => removeStopwatch(index)}
            setName={name => setName(index, name)}
          />
        ))}
      </VStack>

      {stopwatches.some(sw => sw.state === StopwatchState.NOT_STARTED) && (
        <Center mt={2}>
          <IconButton
            colorScheme={'green'}
            aria-label={'Add Stopwatch'}
            onClick={() => {
              console.log('Button Press');
              createStopwatch();
            }}
            icon={<AddIcon />}
          />
        </Center>
      )}
    </Box>
  );
};

export default MultiStopwatchComponent;
