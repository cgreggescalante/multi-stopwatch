import { useState } from 'react';
import { StopwatchData } from './data';

interface MultiStopwatchData {
  createStopwatch: () => void;
  removeStopwatch: (index: number) => void;
  startAll: () => void;
  stopAll: () => void;
  resetAll: () => void;
  start: (index: number) => void;
  lap: (index: number) => void;
  stop: (index: number) => void;
  stopwatches: StopwatchData[];
}

const useMultiStopwatch = (): MultiStopwatchData => {
  const [stopwatches, setStopwatches] = useState<StopwatchData[]>([]);

  const createStopwatch = () => {
    setStopwatches(prevStopwatches => [
      ...prevStopwatches,
      {
        startTime: 0,
        stopTime: 0,
        laps: [],
        isRunning: false,
      },
    ]);
  };

  const removeStopwatch = (index: number) => {
    if (stopwatches.length == 1)
      setStopwatches([{ startTime: 0, stopTime: 0, laps: [], isRunning: false }]);
    else
      setStopwatches(prevStopwatches =>
        prevStopwatches.slice(0, index).concat(prevStopwatches.slice(index + 1)),
      );
  };

  const startAll = () => {
    const time = Date.now();
    stopwatches.forEach(stopwatch => (stopwatch.startTime = time));
  };

  const stopAll = () => {
    const time = Date.now();
    stopwatches.forEach(stopwatch => (stopwatch.stopTime = time));
  };

  const resetAll = () => {
    setStopwatches(prevStopwatches =>
      prevStopwatches.map(_ => ({
        startTime: 0,
        stopTime: 0,
        laps: [],
        isRunning: false,
      })),
    );
  };

  const start = (index: number) => {
    stopwatches[index].startTime = Date.now();
  };

  const lap = (index: number) => {
    stopwatches[index].laps.push(Date.now());
  };

  const stop = (index: number) => {
    stopwatches[index].stopTime = Date.now();
  };

  return {
    createStopwatch,
    removeStopwatch,
    stopwatches,
    startAll,
    stopAll,
    resetAll,
    start,
    lap,
    stop,
  };
};

export { useMultiStopwatch };
