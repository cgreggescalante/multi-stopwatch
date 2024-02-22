import { StopwatchData } from 'utils';

export const hasStarted = (stopwatch: StopwatchData) => stopwatch.startTime !== 0;
