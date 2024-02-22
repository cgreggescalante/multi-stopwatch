import {StopwatchData} from "./data";
import {isRunning} from "./isRunning";

export const anyRunning = (stopwatches: StopwatchData[]) =>
    stopwatches.some(isRunning);