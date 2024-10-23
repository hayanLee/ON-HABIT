export type HabitStatus = {
    day: string;
    isFinished: boolean;
};

export type HabitInfo = {
    id: string;
    name: string;
    habitDays: HabitStatus[];
    remind: string;
    isCompleted: boolean;
    scheduledDays: string[];
};
