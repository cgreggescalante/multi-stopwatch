import { useState } from 'react';

interface StopwatchData {
  startTime: number;
  getElapsedTime: () => number;
  laps: number[];
  lap: (time?: number) => void;
  stop: (time?: number) => void;
  start: (time?: number) => void;
  reset: () => void;
  isRunning: boolean;
}

const useStopwatch = (): StopwatchData => {
  const [startTime, setStartTime] = useState<number>(0);
  const [stopTime, setStopTime] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const start = (time = Date.now()) => {
    setLaps([]);
    setStartTime(time);
    setIsRunning(true);
  };

  const stop = (time = Date.now()) => {
    setIsRunning(false);
    setStopTime(time);
  };

  const reset = () => {
    setStartTime(0);
    setLaps([]);
    setIsRunning(false);
    setStopTime(0);
  };

  const lap = (time = Date.now()) => {
    if (isRunning && laps) {
      setLaps([...laps, time]);
    }
  };

  const getElapsedTime = () => {
    if (!startTime) return 0;
    if (!stopTime) return Date.now() - startTime;
    return stopTime - startTime;
  };

  return {
    startTime,
    getElapsedTime,
    laps,
    lap,
    stop,
    start,
    reset,
    isRunning,
  };
};

export { useStopwatch };
