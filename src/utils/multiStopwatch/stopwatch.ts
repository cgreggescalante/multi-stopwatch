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

export module StopwatchUtils {
  export const reset = (stopwatch: Stopwatch): Stopwatch => {
    return {
      ...stopwatch,
      startTime: 0,
      stopTime: 0,
      laps: [],
      state: StopwatchState.NOT_STARTED,
    };
  };

  export const lap = (stopwatch: Stopwatch, time = Date.now()): Stopwatch => {
    return {
      ...stopwatch,
      laps: [...stopwatch.laps, time],
    };
  };

  export const stop = (stopwatch: Stopwatch, time = Date.now()): Stopwatch => {
    return {
      ...stopwatch,
      stopTime: time,
      state: StopwatchState.COMPLETED,
    };
  };

  export const currentLap = ({ startTime, laps, stopTime }: Stopwatch, now: number) => {
    if (!startTime) return 0;

    if (laps.length) {
      if (stopTime) return stopTime - laps[laps.length - 1];
      return now - laps[laps.length - 1];
    }

    if (stopTime) return stopTime - startTime;

    return now - startTime;
  };

  export const elapsed = ({ startTime, stopTime }: Stopwatch, now: number) => {
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

  export const createEmpty = (n: number): Stopwatch => ({
    name: `Stopwatch ${n}`,
    startTime: 0,
    stopTime: 0,
    laps: [],
    state: StopwatchState.NOT_STARTED,
  });
}
