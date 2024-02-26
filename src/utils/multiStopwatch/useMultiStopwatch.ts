import { useState } from 'react';
import { MultiStopwatchUtils, MultiStopwatch } from './multiStopwatch';

interface MultiStopwatchActions {
  multiStopwatch: MultiStopwatch;
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

const getFromLocalStorage = (id: string): MultiStopwatch => {
  const storedData = localStorage.getItem(id);
  if (storedData) {
    const data: MultiStopwatch = JSON.parse(storedData);
    return data || MultiStopwatchUtils.createEmpty(id);
  }
  return MultiStopwatchUtils.createEmpty(id);
};

const useMultiStopwatch = (id: string): MultiStopwatchActions => {
  const [multiStopwatch, setMultiStopwatch] = useState<MultiStopwatch>(() =>
    getFromLocalStorage(id),
  );

  const updateMultiStopwatch = (func: (state: MultiStopwatch) => MultiStopwatch) => {
    const newState = func(multiStopwatch);
    setMultiStopwatch(newState);
    localStorage.setItem(id, JSON.stringify(newState));
  };

  const createStopwatch = () => updateMultiStopwatch(MultiStopwatchUtils.addStopwatch);

  const handleRemoveStopwatch = (index: number) =>
    updateMultiStopwatch(MultiStopwatchUtils.removeStopwatch(index));

  const handleStartAll = (time = Date.now()) =>
    updateMultiStopwatch(MultiStopwatchUtils.startAll(time));

  const handleStopAll = (time = Date.now()) =>
    updateMultiStopwatch(MultiStopwatchUtils.stopAll(time));

  const handleResetAll = () => updateMultiStopwatch(MultiStopwatchUtils.resetAll);

  const handleLap = (index: number, time = Date.now()) =>
    updateMultiStopwatch(MultiStopwatchUtils.lap(index, time));

  const handleStop = (index: number, time = Date.now()) =>
    updateMultiStopwatch(MultiStopwatchUtils.stop(index, time));

  const handleSetStopwatchName = (index: number, name: string) =>
    updateMultiStopwatch(MultiStopwatchUtils.setStopwatchName(index, name));

  const setName = (name: string) => updateMultiStopwatch(MultiStopwatchUtils.setName(name));

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
