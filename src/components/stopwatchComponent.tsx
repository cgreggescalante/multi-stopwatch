import React, { useEffect, useState } from "react";
import {
  Button,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { formatMs, useStopwatch } from "utils";

const StopwatchComponent = () => {
  const {
    getElapsedTime,
    lap,
    laps,
    reset,
    startTime,
    start,
    stop,
    isRunning,
  } = useStopwatch();
  const [elapsedTime, setElapsedTime] = useState<number>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(getElapsedTime());
    }, 20);

    return () => clearInterval(intervalId);
  }, [startTime]);

  return (
    <>
      <Heading>Stopwatch</Heading>
      <Heading>{formatMs(getElapsedTime())}</Heading>
      <Button onClick={() => start()}>Start</Button>
      <Button onClick={() => lap()}>Lap</Button>
      {isRunning ? (
        <Button onClick={() => stop()}>Stop</Button>
      ) : (
        <Button disabled={startTime === 0} onClick={reset}>
          Reset
        </Button>
      )}
      <Table variant={"simple"} size={"lg"}>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Lap</Th>
            <Th>Split</Th>
          </Tr>
        </Thead>
        <Tbody>
          {laps.map((lap, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{formatMs(lap - startTime)}</Td>
              <Td>{formatMs(lap - (index ? laps[index - 1] : startTime))}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default StopwatchComponent;
