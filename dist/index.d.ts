/// <reference types="react" />
interface TimerDetails {
    startDate?: Date;
    endDate: Date;
}
declare const Timer: (props: TimerDetails) => JSX.Element;

export { Timer };
