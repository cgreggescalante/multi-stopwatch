import { useState } from 'react';
import {
  addStopwatch,
  createEmptyMultiStopwatch,
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

interface MultiStopwatchActions {
  multiStopwatch: MultiStopwatchData;
  createStopwatch: () => void;
  removeStopwatch: (index: number) => void;
  startAll: () => void;
  stopAll: () => void;
  resetAll: () => void;
  lap: (index: number) => void;
  stop: (index: number) => void;
  setName: (name: string) => void;
  setStopwatchName: (index: number, name: string) => void;
}

const getFromLocalStorage = (id: string): MultiStopwatchData => {
  const storedData = localStorage.getItem(id);
  if (storedData) {
    const data: MultiStopwatchData = JSON.parse(storedData);
    return data || createEmptyMultiStopwatch(id);
  }
  return createEmptyMultiStopwatch(id);
};

const useMultiStopwatch = (id: string): MultiStopwatchActions => {
  const [multiStopwatch, setMultiStopwatch] = useState<MultiStopwatchData>(() =>
    getFromLocalStorage(id),
  );

  const updateMultiStopwatch = (func: (state: MultiStopwatchData) => MultiStopwatchData) => {
    const newState = func(multiStopwatch);
    setMultiStopwatch(newState);
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
    multiStopwatch,
    setName,
    setStopwatchName: handleSetStopwatchName,
  };
};

export { useMultiStopwatch };
