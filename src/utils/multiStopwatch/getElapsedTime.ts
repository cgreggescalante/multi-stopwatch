import { StopwatchData } from './data';

export const getElapsedTime = ({ startTime, stopTime }: StopwatchData, now: number) => {
  if (!startTime) return 0;

  if (!stopTime) return now - startTime;

  return stopTime - startTime;
};
