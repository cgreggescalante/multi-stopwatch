import { StopwatchData, StopwatchState } from './data';

export const anyRunning = (stopwatches: StopwatchData[]) =>
  stopwatches.some(sw => sw.state == StopwatchState.RUNNING);
