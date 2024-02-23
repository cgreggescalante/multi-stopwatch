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

export const removeStopwatch =
  (index: number) =>
  (prevState: MultiStopwatchData): MultiStopwatchData => {
    const state = {
      ...prevState,
      stopwatches: prevState.stopwatches.filter((_, i) => i !== index),
    };
    if (state.stopwatches.length === 0) {
      state.stopwatches = [createEmptyStopwatch(1)];
    }

    return state;
  };

export const startAll =
  (time = Date.now()) =>
  (ms: MultiStopwatchData): MultiStopwatchData => {
    return {
      ...ms,
      stopwatches: ms.stopwatches.map(sw => ({
        ...sw,
        startTime: time,
        state: StopwatchState.RUNNING,
      })),
    };
  };

export const stopAll =
  (time = Date.now()) =>
  (ms: MultiStopwatchData): MultiStopwatchData => {
    return {
      ...ms,
      stopwatches: ms.stopwatches.map(sw => ({
        ...sw,
        stopTime: time,
        state: StopwatchState.COMPLETED,
      })),
    };
  };

export const resetAll = (ms: MultiStopwatchData): MultiStopwatchData => {
  return {
    ...ms,
    stopwatches: ms.stopwatches.map(sw => resetStopwatch(sw)),
  };
};

export const lap =
  (index: number, time = Date.now()) =>
  (ms: MultiStopwatchData): MultiStopwatchData => {
    return {
      ...ms,
      stopwatches: ms.stopwatches.map((sw, i) => (index == i ? lapStopwatch(sw, time) : sw)),
    };
  };

export const stop =
  (index: number, time = Date.now()) =>
  (ms: MultiStopwatchData): MultiStopwatchData => {
    return {
      ...ms,
      stopwatches: ms.stopwatches.map((sw, i) => (index == i ? stopStopwatch(sw, time) : sw)),
    };
  };

export const setStopwatchName =
  (index: number, name: string) =>
  (ms: MultiStopwatchData): MultiStopwatchData => {
    return {
      ...ms,
      stopwatches: ms.stopwatches.map((sw, i) => (index == i ? setName(sw, name) : sw)),
    };
  };

export const setMultiStopwatchName =
  (name: string) =>
  (ms: MultiStopwatchData): MultiStopwatchData => {
    return {
      ...ms,
      name,
    };
  };

export const addStopwatch = (ms: MultiStopwatchData): MultiStopwatchData => {
  return {
    ...ms,
    stopwatches: [...ms.stopwatches, createEmptyStopwatch(ms.stopwatches.length + 1)],
  };
};

export const anyRunning = (ms: MultiStopwatchData): boolean =>
  ms.stopwatches.some(sw => sw.state == StopwatchState.RUNNING);
