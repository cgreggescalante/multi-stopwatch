export interface Stopwatch {
  name: string;
  startTime: number;
  stopTime: number;
  laps: number[];
  state: StopwatchState;
}

export enum StopwatchState {
  NOT_STARTED = 'not_started',
  RUNNING = 'running',
  COMPLETED = 'completed',
}

export const resetStopwatch = (stopwatch: Stopwatch): Stopwatch => {
  return {
    ...stopwatch,
    startTime: 0,
    stopTime: 0,
    laps: [],
    state: StopwatchState.NOT_STARTED,
  };
};

export const lapStopwatch = (stopwatch: Stopwatch, time = Date.now()): Stopwatch => {
  return {
    ...stopwatch,
    laps: [...stopwatch.laps, time],
  };
};

export const stopStopwatch = (stopwatch: Stopwatch, time = Date.now()): Stopwatch => {
  return {
    ...stopwatch,
    stopTime: time,
    state: StopwatchState.COMPLETED,
  };
};

export const getCurrentLap = ({ startTime, laps, stopTime }: Stopwatch, now: number) => {
  if (!startTime) return 0;

  if (laps.length) {
    if (stopTime) return stopTime - laps[laps.length - 1];
    return now - laps[laps.length - 1];
  }

  if (stopTime) return stopTime - startTime;

  return now - startTime;
};

export const getElapsedTime = ({ startTime, stopTime }: Stopwatch, now: number) => {
  if (!startTime) return 0;

  if (!stopTime) return now - startTime;

  return stopTime - startTime;
};

export const setName = (stopwatch: Stopwatch, name: string): Stopwatch => {
  return {
    ...stopwatch,
    name,
  };
};

export const createEmptyStopwatch = (n: number): Stopwatch => ({
  name: `Stopwatch ${n}`,
  startTime: 0,
  stopTime: 0,
  laps: [],
  state: StopwatchState.NOT_STARTED,
});
