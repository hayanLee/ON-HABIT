import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

type ProgressState = {
    progress: number;
    step: number;
};
type ProgressActions = {
    setProgress: (nextValue: ProgressState['progress']) => void;
};
type ProgressStore = ProgressState & ProgressActions;

const useProgressStore = create<ProgressStore>()(
    devtools(
        combine({ progress: 1, step: 4 }, (set) => ({
            setProgress: (nextValue) => set(() => ({ progress: nextValue })),
        }))
    )
);

export default useProgressStore;
