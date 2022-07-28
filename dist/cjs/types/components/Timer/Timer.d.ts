/// <reference types="react" />
export interface TimerDetails {
    startDate?: Date;
    endDate: Date;
}
declare const Timer: (props: TimerDetails) => JSX.Element;
export default Timer;
