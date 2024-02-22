import { StopwatchData } from './data';

export const getCurrentLap = ({ startTime, laps, stopTime }: StopwatchData, now: number) => {
  if (!startTime) return 0;

  if (laps.length) {
    if (stopTime) return stopTime - laps[laps.length - 1];
    return now - laps[laps.length - 1];
  }

  if (stopTime) return stopTime - startTime;

  return now - startTime;
};
