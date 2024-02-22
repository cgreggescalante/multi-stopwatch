import React, {useEffect, useState} from "react";
import useMultiStopwatch, {StopwatchData} from "../utils/useMultiStopwatch";
import {Button, Heading, Table, Tbody, Td, Th, Thead, Tr, Text, ButtonGroup} from "@chakra-ui/react";
import formatMs from "../utils/formatMs";

const MultiStopwatchComponent = () => {
    const { createStopwatch, removeStopwatch, stopwatches, stopAll, start, stop, startAll, resetAll, lap } = useMultiStopwatch();

    const [now, setNow] = useState<number>(Date.now());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow(Date.now());
        }, 20);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Heading>Multi Stopwatch</Heading>
            <Button onClick={() => createStopwatch()}>Create</Button>
            <Button onClick={() => removeStopwatch(stopwatches.length - 1)}>Remove</Button>
            <Button onClick={() => startAll()}>Start All</Button>
            <Button onClick={() => stopAll()}>Stop All</Button>
            <Button onClick={() => resetAll()}>Reset All</Button>
            <Table>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Time / Current Lap</Th>
                        <Th />
                        <Th colSpan={Math.max(...stopwatches.map(sw => sw.laps.length))}>Laps</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {stopwatches.map((sw, index) => (
                        <Tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>
                                <Text>{formatMs(getElapsedTime(sw, now))}</Text>
                                <Text>{formatMs(getCurrentLap(sw, now))}</Text>
                            </Td>
                            <Td>
                                <ButtonGroup size={'md'} isAttached variant={'outline'}>
                                    <Button colorScheme={'green'} isDisabled={isRunning(sw)} onClick={() => start(index)}>Start</Button>
                                    <Button colorScheme={'red'} isDisabled={!isRunning(sw)} onClick={() => stop(index)}>Stop</Button>
                                    <Button colorScheme={'blue'} isDisabled={!isRunning(sw)} onClick={() => lap(index)}>Lap</Button>
                                </ButtonGroup>
                            </Td>
                            {
                                sw.laps.map((_, i) => <LapData key={i} laps={sw.laps} startTime={sw.startTime} index={sw.laps.length - i - 1} />)
                            }
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
    );
}

const isRunning = ({ startTime, stopTime }: StopwatchData) => startTime !== 0 && stopTime === 0;

const getElapsedTime = ({ startTime, stopTime }: StopwatchData, now: number) => {
    if (!startTime) return 0;

    if (!stopTime) return now - startTime;

    return stopTime - startTime;
}

const getCurrentLap = ({ startTime, laps, stopTime }: StopwatchData, now: number) => {
    if (!startTime) return 0;

    if (laps.length) {
        if (stopTime) return stopTime - laps[laps.length - 1];
        return now - laps[laps.length - 1];
    }

    if (stopTime) return stopTime - startTime;

    return now - startTime;
}

interface LapDataProps {
    laps: number[];
    startTime: number;
    index: number;
}

const LapData = ({laps, startTime, index}: LapDataProps) => (
    <Td>
        <Text>{index + 1}</Text>
        <Text size={'md'}>{formatMs(laps[index] - startTime)}</Text>
        <Text size={'sm'}>{formatMs(laps[index] - (index ? laps[index - 1] : startTime))}</Text>
    </Td>
)

export default MultiStopwatchComponent;