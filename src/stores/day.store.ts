import { CURRENT_DAY } from '@/constant/dayjs';
import { create } from 'zustand';

interface DayStoreType {
    selectedDay: string;
    updateDay: (changedDay: string) => void;
}

const useDayStore = create<DayStoreType>()((set) => ({
    selectedDay: CURRENT_DAY,
    updateDay: (changedDay) => set({ selectedDay: changedDay }),
}));

export default useDayStore;
