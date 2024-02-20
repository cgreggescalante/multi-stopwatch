import React, {useEffect} from "react";
import {useState} from "react";
import {Button, Heading, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import useStopwatch from "../utils/useStopwatch";

const formatMs = (ms: number) => {
    const seconds = Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms / 60000) % 60;
    const hours = Math.floor(ms / 3600000);
    const remainingMs = Math.floor(ms % 1000 / 10).toString().padStart(2, '0');

    if (hours) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${remainingMs}`;
    } else if (minutes) {
        return `${minutes}:${seconds.toString().padStart(2, '0')}.${remainingMs}`;
    }

    return `${seconds}.${remainingMs}`;
}

const StopwatchComponent = () => {
    const {getElapsedTime, lap, laps, reset, startTime, start } = useStopwatch()
    const [elapsedTime, setElapsedTime] = useState<number>();

    useEffect(() => {
        let intervalId = setInterval(() => {
                setElapsedTime(getElapsedTime());
            }, 20);

        return () => {
            clearInterval(intervalId);
        };
    }, [startTime]);

    return (
        <>
            <Heading>Stopwatch</Heading>
            { elapsedTime && elapsedTime > 0 && <Heading>{formatMs(elapsedTime)}</Heading> }
            <Button onClick={start}>Start</Button>
            <Button onClick={lap}>Lap</Button>
            { startTime &&
                <Table variant={'simple'} size={'lg'}>
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Lap</Th>
                            <Th>Split</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {laps.map((lap, index) =>
                            <Tr key={index}>
                                <Td>{index + 1}</Td>
                                <Td>{formatMs(lap - startTime)}</Td>
                                <Td>{formatMs(lap - (index ? laps[index - 1] : startTime))}</Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            }
        </>
    )
}

export default StopwatchComponent;