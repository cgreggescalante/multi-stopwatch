import React from 'react';
import { Box, Button, ButtonGroup, Center, IconButton, VStack } from '@chakra-ui/react';
import { StopwatchRow } from './stopwatchRow';
import { MultiStopwatchState, toCSV, useMultiStopwatch } from 'utils';
import { AddIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'gatsby';

const MultiStopwatchComponent = ({ id }: { id: string }) => {
  const {
    createStopwatch,
    removeStopwatch,
    multiStopwatch,
    stopAll,
    stop,
    startAll,
    resetAll,
    lap,
    setStopwatchName,
  } = useMultiStopwatch(id);

  const exportCSV = () => {
    const csv = toCSV(multiStopwatch);
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    console.log('Downloading');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${multiStopwatch.name}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box m={1}>
      <Link to={'/'}>
        <ArrowBackIcon boxSize={8} />
      </Link>

      {/* Controls */}
      <Center mb={2} mt={2}>
        <ButtonGroup isAttached variant={'solid'}>
          <Button
            colorScheme={'green'}
            isDisabled={multiStopwatch.state != MultiStopwatchState.NOT_STARTED}
            onClick={() => startAll()}
          >
            Start All
          </Button>
          <Button
            isDisabled={multiStopwatch.state != MultiStopwatchState.RUNNING}
            colorScheme={'red'}
            onClick={() => stopAll()}
          >
            Stop All
          </Button>
          <Button
            colorScheme={'yellow'}
            isDisabled={multiStopwatch.state == MultiStopwatchState.NOT_STARTED}
            onClick={() => resetAll()}
          >
            Reset All
          </Button>
        </ButtonGroup>
      </Center>

      <VStack align={'flex-start'} spacing={0}>
        {multiStopwatch.stopwatches.map((sw, index) => (
          <StopwatchRow
            key={index}
            sw={sw}
            index={index}
            stop={() => stop(index)}
            lap={() => lap(index)}
            remove={() => removeStopwatch(index)}
            setName={name => setStopwatchName(index, name)}
          />
        ))}
      </VStack>

      {multiStopwatch.state == MultiStopwatchState.NOT_STARTED && (
        <Center mt={2}>
          <IconButton
            colorScheme={'green'}
            aria-label={'Add Stopwatch'}
            onClick={createStopwatch}
            icon={<AddIcon />}
          />
        </Center>
      )}

      {multiStopwatch.state == MultiStopwatchState.COMPLETE && (
        <Button onClick={exportCSV} mt={2}>
          Export CSV
        </Button>
      )}
    </Box>
  );
};

export default MultiStopwatchComponent;
