import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Center, IconButton, VStack } from '@chakra-ui/react';
import { StopwatchRow } from './stopwatchRow';
import { anyRunning, useMultiStopwatch } from 'utils';
import { AddIcon } from '@chakra-ui/icons';

const MultiStopwatchComponent = () => {
  const {
    createStopwatch,
    removeStopwatch,
    stopwatches,
    stopAll,
    start,
    stop,
    startAll,
    resetAll,
    lap,
  } = useMultiStopwatch();

  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
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
            start={() => start(index)}
            remove={() => removeStopwatch(index)}
            now={now}
          />
        ))}
      </VStack>

      <Center mt={2}>
        <IconButton
          colorScheme={'green'}
          isDisabled={anyRunning(stopwatches)}
          aria-label={'Add Stopwatch'}
          onClick={createStopwatch}
          icon={<AddIcon />}
        />
      </Center>
    </>
  );
};

export default MultiStopwatchComponent;