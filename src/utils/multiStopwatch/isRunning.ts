import { StopwatchData } from './data';

export const isRunning = ({ startTime, stopTime }: StopwatchData) =>
  startTime !== 0 && stopTime === 0;
