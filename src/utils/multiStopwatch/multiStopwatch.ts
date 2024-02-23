import {
  createEmptyStopwatch,
  lapStopwatch,
  resetStopwatch,
  setName,
  stopStopwatch,
  Stopwatch,
  StopwatchState,
} from './stopwatch';

export interface MultiStopwatchData {
  name: string;
  id: string;
  stopwatches: Stopwatch[];
}

export const removeStopwatch = (prevState: MultiStopwatchData, index: number) => {
  const state = {
    ...prevState,
    stopwatches: prevState.stopwatches.filter((_, i) => i !== index),
  };
  if (state.stopwatches.length === 0) {
    state.stopwatches = [createEmptyStopwatch(1)];
  }

  return state;
};

export const startAll = (ms: MultiStopwatchData, time = Date.now()) => {
  return {
    ...ms,
    stopwatches: ms.stopwatches.map(sw => ({
      ...sw,
      startTime: time,
      state: StopwatchState.RUNNING,
    })),
  };
};

export const stopAll = (ms: MultiStopwatchData, time = Date.now()) => {
  return {
    ...ms,
    stopwatches: ms.stopwatches.map(sw => ({
      ...sw,
      stopTime: time,
      state: StopwatchState.COMPLETED,
    })),
  };
};

export const resetAll = (ms: MultiStopwatchData) => {
  return {
    ...ms,
    stopwatches: ms.stopwatches.map(sw => resetStopwatch(sw)),
  };
};

export const lap = (ms: MultiStopwatchData, index: number, time = Date.now()) => {
  return {
    ...ms,
    stopwatches: ms.stopwatches.map((sw, i) => (index == i ? lapStopwatch(sw, time) : sw)),
  };
};

export const stop = (ms: MultiStopwatchData, index: number, time = Date.now()) => {
  return {
    ...ms,
    stopwatches: ms.stopwatches.map((sw, i) => (index == i ? stopStopwatch(sw, time) : sw)),
  };
};

export const setStopwatchName = (ms: MultiStopwatchData, index: number, name: string) => {
  return {
    ...ms,
    stopwatches: ms.stopwatches.map((sw, i) => (index == i ? setName(sw, name) : sw)),
  };
};

export const setMultiStopwatchName = (ms: MultiStopwatchData, name: string) => {
  return {
    ...ms,
    name,
  };
};

export const addStopwatch = (ms: MultiStopwatchData) => {
  return {
    ...ms,
    stopwatches: [...ms.stopwatches, createEmptyStopwatch(ms.stopwatches.length + 1)],
  };
};

export const anyRunning = (ms: MultiStopwatchData) =>
  ms.stopwatches.some(sw => sw.state == StopwatchState.RUNNING);
