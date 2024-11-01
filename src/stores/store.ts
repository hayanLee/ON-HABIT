import { CURRENT_DAY } from '@/constant/dayjs';
import { create } from 'zustand';

interface DayStoreType {
    selectedDay: string;
    updateDay: (changedDay: string) => void;
}

export const useDayStore = create<DayStoreType>((set) => ({
    selectedDay: CURRENT_DAY,
    updateDay: (changedDay) => set({ selectedDay: changedDay }),
}));

interface ModalStoreType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const useModalStore = create<ModalStoreType>((set) => ({
    isModalOpen: false,
    openModal: () => set({ isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false }),
}));

export default useModalStore;
