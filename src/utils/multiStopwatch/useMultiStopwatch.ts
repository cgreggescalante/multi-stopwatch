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
  setName: (index: number, name: string) => void;
}

const createEmptyStopwatch = (n: number): StopwatchData => ({
  name: `Stopwatch ${n}`,
  startTime: 0,
  stopTime: 0,
  laps: [],
  isRunning: false,
});

const useMultiStopwatch = (): MultiStopwatchData => {
  const [stopwatches, setStopwatches] = useState<StopwatchData[]>([]);

  const createStopwatch = () => {
    setStopwatches(prevStopwatches => [
      ...prevStopwatches,
      createEmptyStopwatch(prevStopwatches.length + 1),
    ]);
  };

  const removeStopwatch = (index: number) => {
    if (stopwatches.length == 1) setStopwatches([createEmptyStopwatch(1)]);
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
      prevStopwatches.map(data => ({
        ...data,
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

  const setName = (index: number, name: string) => {
    stopwatches[index].name = name;
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
    setName,
  };
};

export { useMultiStopwatch };
