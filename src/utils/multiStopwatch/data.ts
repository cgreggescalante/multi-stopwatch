export interface MultiStopwatchData {
  name: string;
  id: string;
  stopwatches: StopwatchData[];
}

export interface StopwatchData {
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
