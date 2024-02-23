import { useState } from 'react';
import {
  addStopwatch,
  lap,
  MultiStopwatchData,
  removeStopwatch,
  resetAll,
  setMultiStopwatchName,
  setStopwatchName,
  startAll,
  stop,
  stopAll,
} from './multiStopwatch';
import { createEmptyStopwatch, Stopwatch } from './stopwatch';

interface MultiStopwatchActions {
  createStopwatch: () => void;
  removeStopwatch: (index: number) => void;
  startAll: () => void;
  stopAll: () => void;
  resetAll: () => void;
  lap: (index: number) => void;
  stop: (index: number) => void;
  stopwatches: Stopwatch[];
  multiStopwatch: MultiStopwatchData;
  name: string;
  setName: (name: string) => void;
  setStopwatchName: (index: number, name: string) => void;
}

export const createEmptyMultiStopwatch = (id: string): MultiStopwatchData => ({
  name: `Multi Stopwatch ${id}`,
  id,
  stopwatches: [createEmptyStopwatch(1)],
});

const getFromLocalStorage = (id: string): MultiStopwatchData => {
  const storedData = localStorage.getItem(id);
  if (storedData) {
    const data: MultiStopwatchData = JSON.parse(storedData);
    return data || createEmptyMultiStopwatch(id);
  }
  return createEmptyMultiStopwatch(id);
};

const useMultiStopwatch = (id: string): MultiStopwatchActions => {
  const [multiStopwatchData, setMultiStopwatchData] = useState<MultiStopwatchData>(() =>
    getFromLocalStorage(id),
  );

  const updateMultiStopwatch = (func: (state: MultiStopwatchData) => MultiStopwatchData) => {
    const newState = func(multiStopwatchData);
    setMultiStopwatchData(newState);
    localStorage.setItem(id, JSON.stringify(newState));
  };

  const createStopwatch = () => updateMultiStopwatch(addStopwatch);

  const handleRemoveStopwatch = (index: number) => updateMultiStopwatch(removeStopwatch(index));

  const handleStartAll = (time = Date.now()) => updateMultiStopwatch(startAll(time));

  const handleStopAll = (time = Date.now()) => updateMultiStopwatch(stopAll(time));

  const handleResetAll = () => updateMultiStopwatch(resetAll);

  const handleLap = (index: number, time = Date.now()) => updateMultiStopwatch(lap(index, time));

  const handleStop = (index: number, time = Date.now()) => updateMultiStopwatch(stop(index, time));

  const handleSetStopwatchName = (index: number, name: string) =>
    updateMultiStopwatch(setStopwatchName(index, name));

  const setName = (name: string) => updateMultiStopwatch(setMultiStopwatchName(name));

  return {
    createStopwatch,
    removeStopwatch: handleRemoveStopwatch,
    startAll: handleStartAll,
    stopAll: handleStopAll,
    resetAll: handleResetAll,
    lap: handleLap,
    stop: handleStop,
    stopwatches: multiStopwatchData.stopwatches,
    multiStopwatch: multiStopwatchData,
    name: multiStopwatchData.name,
    setName,
    setStopwatchName: handleSetStopwatchName,
  };
};

export { useMultiStopwatch };
