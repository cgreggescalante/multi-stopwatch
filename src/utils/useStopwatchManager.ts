import { useEffect, useState } from 'react';

const STORAGE_KEY = 'stopwatch-list';

export const useStopwatchManager = (): [string[], (value: string[]) => void] => {
  const [stopwatchList, setStopwatchList] = useState<string[]>([]);

  useEffect(() => {
    const storedStopwatchList = localStorage.getItem(STORAGE_KEY);
    if (storedStopwatchList) {
      setStopwatchList(JSON.parse(storedStopwatchList));
    }
  }, []);

  const saveToLocalStorage = (ids: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  };

  const setIds = (ids: string[]) => {
    setStopwatchList(ids);
    saveToLocalStorage(ids);
  };

  return [stopwatchList, setIds];
};
