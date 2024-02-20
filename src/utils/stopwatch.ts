export class Stopwatch {
    private startTime: number;
    private stopTime: number;
    private laps: number[];

    constructor() {
        this.startTime = 0;
        this.stopTime = 0;
        this.laps = [];
    }

    start = (time = Date.now()) => {
        console.log("Starting")
        this.reset();
        this.startTime = time;
    }

    lap = (time = Date.now()) => {
        this.laps.push(time);
    }

    stop = (time = Date.now()) => {
        this.stopTime = time;
    }

    reset = () => {
        this.startTime = 0;
        this.stopTime = 0;
        this.laps = [];
    }

    getStartTime = () => { return this.startTime; }
    getLaps = () => { return this.laps; }

    getElapsedTime = (time = Date.now()) => {
        if (this.stopTime)
            return this.stopTime - this.startTime;
        else if (this.startTime)
            return time - this.startTime;

        return 0;
    }

    isRunning = () => { return this.startTime !== 0 && this.stopTime === 0; }
}