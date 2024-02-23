import { useState } from 'react';
import { MultiStopwatchData, StopwatchData, StopwatchState } from './data';

interface MultiStopwatchActions {
  createStopwatch: () => void;
  removeStopwatch: (index: number) => void;
  startAll: () => void;
  stopAll: () => void;
  resetAll: () => void;
  lap: (index: number) => void;
  stop: (index: number) => void;
  stopwatches: StopwatchData[];
  setName: (index: number, name: string) => void;
}

export const createEmptyStopwatch = (n: number): StopwatchData => ({
  name: `Stopwatch ${n}`,
  startTime: 0,
  stopTime: 0,
  laps: [],
  state: StopwatchState.NOT_STARTED,
});

export const createEmptyMultiStopwatch = (id: string): MultiStopwatchData => ({
  name: `Multi Stopwatch ${id}`,
  id,
  stopwatches: [createEmptyStopwatch(1)],
});

const getFromLocalStorage = (id: string): MultiStopwatchData => {
  const storedData = localStorage.getItem(id);
  if (storedData) {
    const data: MultiStopwatchData = JSON.parse(storedData);
    return data || createEmptyMultiStopwatch(id);
  }
  return createEmptyMultiStopwatch(id);
};

const useMultiStopwatch = (id: string): MultiStopwatchActions => {
  const [multiStopwatchData, setMultiStopwatchData] = useState<MultiStopwatchData>(() =>
    getFromLocalStorage(id),
  );

  const updateLocalStorage = (updatedData: MultiStopwatchData) => {
    localStorage.setItem(id, JSON.stringify(updatedData));
  };

  const createStopwatch = () => {
    const data = {
      ...multiStopwatchData,
      stopwatches: [
        ...multiStopwatchData.stopwatches,
        createEmptyStopwatch(multiStopwatchData.stopwatches.length + 1),
      ],
    };
    setMultiStopwatchData(data);
    updateLocalStorage(data);
  };

  const removeStopwatch = (index: number) => {
    setMultiStopwatchData(prevState => {
      const state = {
        ...prevState,
        stopwatches: prevState.stopwatches.filter((_, i) => i !== index),
      };
      if (state.stopwatches.length === 0) {
        state.stopwatches = [createEmptyStopwatch(1)];
      }
      updateLocalStorage(state);
      return state;
    });
  };

  const startAll = (time = Date.now()) => {
    setMultiStopwatchData(prevState => {
      const state = {
        ...prevState,
        stopwatches: prevState.stopwatches.map(stopwatch => ({
          ...stopwatch,
          startTime: time,
          state: StopwatchState.RUNNING,
        })),
      };
      updateLocalStorage(state);
      return state;
    });
  };

  const stopAll = (time = Date.now()) => {
    setMultiStopwatchData(prevState => {
      const state = {
        ...prevState,
        stopwatches: prevState.stopwatches.map(stopwatch => ({
          ...stopwatch,
          stopTime: time,
          state: StopwatchState.COMPLETED,
        })),
      };
      updateLocalStorage(state);
      return state;
    });
  };

  const resetAll = () => {
    setMultiStopwatchData(prevState => {
      const state = {
        ...prevState,
        stopwatches: prevState.stopwatches.map(stopwatch => ({
          ...createEmptyStopwatch(1),
          name: stopwatch.name,
        })),
      };
      updateLocalStorage(state);
      return state;
    });
  };

  const lap = (index: number, time = Date.now()) => {
    setMultiStopwatchData(prevState => {
      const state = {
        ...prevState,
        stopwatches: prevState.stopwatches.map((stopwatch, i) => ({
          ...stopwatch,
          laps: index == i ? [...stopwatch.laps, time] : stopwatch.laps,
        })),
      };
      updateLocalStorage(state);
      return state;
    });
  };

  const stop = (index: number, time = Date.now()) => {
    const data = {
      ...multiStopwatchData,
      stopwatches: multiStopwatchData.stopwatches.map((stopwatch, i) => ({
        ...stopwatch,
        stopTime: index == i ? time : stopwatch.stopTime,
        state: index == i ? StopwatchState.COMPLETED : stopwatch.state,
      })),
    };

    setMultiStopwatchData(data);
    updateLocalStorage(data);
  };

  const setName = (index: number, name: string) => {
    const data = {
      ...multiStopwatchData,
      stopwatches: multiStopwatchData.stopwatches.map((stopwatch, i) => ({
        ...stopwatch,
        name: index == i ? name : stopwatch.name,
      })),
    };

    setMultiStopwatchData(data);
    updateLocalStorage(data);
  };

  return {
    createStopwatch,
    removeStopwatch,
    startAll,
    stopAll,
    resetAll,
    lap,
    stop,
    stopwatches: multiStopwatchData.stopwatches,
    setName,
  };
};

export { useMultiStopwatch };
