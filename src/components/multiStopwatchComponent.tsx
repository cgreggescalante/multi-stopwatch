import React, { useEffect, useState } from 'react';
import {
  Button,
  ButtonGroup,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { StopwatchRow } from './multiStopwatch/stopwatchRow';
import { anyRunning, useMultiStopwatch } from 'utils';

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
      <ButtonGroup isAttached variant={'solid'}>
        <Button colorScheme={'green'} onClick={() => startAll()}>
          Start All
        </Button>
        <Button isDisabled={!anyRunning(stopwatches)} colorScheme={'red'} onClick={() => stopAll()}>
          Stop All
        </Button>
        <Button colorScheme={'yellow'} onClick={() => resetAll()}>
          Reset All
        </Button>
      </ButtonGroup>

      <TableContainer>
        <Table size={'sm'} m={0} p={0}>
          <Thead>
            <Tr>
              <Th />
              <Th colSpan={Math.max(...stopwatches.map(sw => sw.laps.length + 1))}>Laps</Th>
            </Tr>
          </Thead>
          <Tbody>
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
            <Tr>
              <Td colSpan={1}>
                <Button
                  variant={'solid'}
                  isDisabled={anyRunning(stopwatches)}
                  colorScheme={'green'}
                  onClick={createStopwatch}
                >
                  Add
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MultiStopwatchComponent;
