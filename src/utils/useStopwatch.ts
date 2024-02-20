import { useState, useRef } from 'react';

interface Stopwatch {
    startTime: number | null;
    laps: number[];
    isRunning: boolean;
}

const useStopwatch = (): {
    startTime: number | null;
    getElapsedTime: () => number;
    laps: number[];
    lap: () => void;
    stop: () => void;
    reset: () => void;
    start: () => void;
} => {
    const [stopwatch, setStopwatch] = useState<Stopwatch>({
        startTime: null,
        laps: [],
        isRunning: false,
    });

    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const start = () => {
        setStopwatch((prevStopwatch) => ({
            laps: [],
            startTime: Date.now(),
            isRunning: true,
        }));
    };

    const stop = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setStopwatch((prevStopwatch) => ({
            ...prevStopwatch,
            isRunning: false,
        }));
    };

    const reset = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setStopwatch({
            startTime: null,
            laps: [],
            isRunning: false,
        });
    };

    const lap = () => {
        if (stopwatch.startTime) {
            setStopwatch((prevStopwatch) => ({
                ...prevStopwatch,
                laps: [...prevStopwatch.laps, Date.now()],
            }));
        }
    };

    const getElapsedTime = () => {
        if (!stopwatch.startTime) return 0;
        const now = Date.now();
        return now - stopwatch.startTime;
    };

    return {
        startTime: stopwatch.startTime,
        getElapsedTime,
        laps: stopwatch.laps,
        lap,
        stop,
        start,
        reset,
    };
};

export default useStopwatch;
