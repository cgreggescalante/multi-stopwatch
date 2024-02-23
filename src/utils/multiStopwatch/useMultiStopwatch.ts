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

  const updateLocalStorage = (updatedData: MultiStopwatchData) => {
    localStorage.setItem(id, JSON.stringify(updatedData));
  };

  const createStopwatch = () => {
    const newState = addStopwatch(multiStopwatchData);
    setMultiStopwatchData(newState);
    updateLocalStorage(newState);
  };

  const handleRemoveStopwatch = (index: number) => {
    const newState = removeStopwatch(multiStopwatchData, index);
    setMultiStopwatchData(newState);
    updateLocalStorage(newState);
  };

  const handleStartAll = (time = Date.now()) => {
    const newState = startAll(multiStopwatchData, time);
    setMultiStopwatchData(newState);
    updateLocalStorage(newState);
  };

  const handleStopAll = (time = Date.now()) => {
    const newState = stopAll(multiStopwatchData, time);
    setMultiStopwatchData(newState);
    updateLocalStorage(newState);
  };

  const handleResetAll = () => {
    const newState = resetAll(multiStopwatchData);
    setMultiStopwatchData(newState);
    updateLocalStorage(newState);
  };

  const handleLap = (index: number, time = Date.now()) => {
    const newState = lap(multiStopwatchData, index, time);
    setMultiStopwatchData(newState);
    updateLocalStorage(newState);
  };

  const handleStop = (index: number, time = Date.now()) => {
    const newState = stop(multiStopwatchData, index, time);
    setMultiStopwatchData(newState);
    updateLocalStorage(newState);
  };

  const handleSetStopwatchName = (index: number, name: string) => {
    const newState = setStopwatchName(multiStopwatchData, index, name);
    setMultiStopwatchData(newState);
    updateLocalStorage(newState);
  };

  const setName = (name: string) => {
    const newState = setMultiStopwatchName(multiStopwatchData, name);
    setMultiStopwatchData(newState);
    updateLocalStorage(newState);
  };

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
