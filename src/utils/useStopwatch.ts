import { useState } from "react";

const useStopwatch = (): {
  startTime: number;
  getElapsedTime: () => number;
  laps: number[];
  lap: () => void;
  stop: () => void;
  reset: () => void;
  start: () => void;
  isRunning: boolean;
} => {
  const [startTime, setStartTime] = useState<number>(0);
  const [stopTime, setStopTime] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const start = () => {
    setLaps([]);
    setStartTime(Date.now());
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
    setStopTime(Date.now());
  };

  const reset = () => {
    setStartTime(0);
    setLaps([]);
    setIsRunning(false);
    setStopTime(0);
  };

  const lap = () => {
    if (isRunning && laps) {
      setLaps([...laps, Date.now()]);
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

export default useStopwatch;
