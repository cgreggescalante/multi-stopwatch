import { StopwatchData } from 'utils';

export const isCompleted = (data: StopwatchData): boolean =>
  data.startTime > 0 && data.stopTime > 0;
