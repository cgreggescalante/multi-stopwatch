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
  state: MultiStopwatchState;
}

export enum MultiStopwatchState {
  NOT_STARTED,
  RUNNING,
  COMPLETE,
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
  (ms: MultiStopwatchData): MultiStopwatchData => ({
    ...ms,
    state: MultiStopwatchState.RUNNING,
    stopwatches: ms.stopwatches.map(sw => ({
      ...sw,
      startTime: time,
      state: StopwatchState.RUNNING,
    })),
  });

export const stopAll =
  (time = Date.now()) =>
  (ms: MultiStopwatchData): MultiStopwatchData => ({
    ...ms,
    state: MultiStopwatchState.COMPLETE,
    stopwatches: ms.stopwatches.map(sw => ({
      ...sw,
      stopTime: time,
      state: StopwatchState.COMPLETED,
    })),
  });

export const resetAll = (ms: MultiStopwatchData): MultiStopwatchData => ({
  ...ms,
  state: MultiStopwatchState.NOT_STARTED,
  stopwatches: ms.stopwatches.map(sw => resetStopwatch(sw)),
});

export const lap =
  (index: number, time = Date.now()) =>
  (ms: MultiStopwatchData): MultiStopwatchData => ({
    ...ms,
    stopwatches: ms.stopwatches.map((sw, i) => (index == i ? lapStopwatch(sw, time) : sw)),
  });

export const stop =
  (index: number, time = Date.now()) =>
  (ms: MultiStopwatchData): MultiStopwatchData => {
    const state = {
      ...ms,
      stopwatches: ms.stopwatches.map((sw, i) => (index == i ? stopStopwatch(sw, time) : sw)),
    };

    if (!anyRunning(state)) state.state = MultiStopwatchState.COMPLETE;

    return state;
  };

export const setStopwatchName =
  (index: number, name: string) =>
  (ms: MultiStopwatchData): MultiStopwatchData => ({
    ...ms,
    stopwatches: ms.stopwatches.map((sw, i) => (index == i ? setName(sw, name) : sw)),
  });

export const setMultiStopwatchName =
  (name: string) =>
  (ms: MultiStopwatchData): MultiStopwatchData => ({
    ...ms,
    name,
  });

export const addStopwatch = (ms: MultiStopwatchData): MultiStopwatchData => ({
  ...ms,
  stopwatches: [...ms.stopwatches, createEmptyStopwatch(ms.stopwatches.length + 1)],
});

export const anyRunning = (ms: MultiStopwatchData): boolean =>
  ms.stopwatches.some(sw => sw.state == StopwatchState.RUNNING);

export const createEmptyMultiStopwatch = (id: string): MultiStopwatchData => ({
  name: `Multi Stopwatch ${id}`,
  id,
  stopwatches: [createEmptyStopwatch(1)],
  state: MultiStopwatchState.NOT_STARTED,
});
