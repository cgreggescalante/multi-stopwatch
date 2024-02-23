import { formatMs, MultiStopwatch } from 'utils';

export const toCSV = (multiStopwatch: MultiStopwatch): string => {
  let csv = [multiStopwatch.name, 'Name,Finish Time,Laps'];

  multiStopwatch.stopwatches.forEach(sw => {
    const row1 = [sw.name, formatMs(sw.stopTime - sw.startTime)];
    const row2 = ['', ''];
    sw.laps.forEach((lap, index) => {
      row1.push(formatMs(lap - sw.startTime));
      row2.push(formatMs(lap - (index === 0 ? sw.startTime : sw.laps[index - 1])));
    });
    csv.push(row1.join(','), row2.join(','));
  });

  return csv.join('\n');
};
