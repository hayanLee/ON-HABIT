export type Period = {
    day: string;
    isFinished: boolean;
};

export type HabitInfo = {
    id: string;
    name: string;
    periods: Period[];
    remind: string;
    isCompleted: boolean;
};
