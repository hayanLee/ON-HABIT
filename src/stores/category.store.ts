import { create } from 'zustand';

interface CategoryState {
    chosenCategories: string[];
    setChosenCategories: (targetId: string) => void;
}

const useCategoryStore = create<CategoryState>((set) => ({
    chosenCategories: [],
    setChosenCategories: (targetId) =>
        set((state) => ({
            chosenCategories: state.chosenCategories.includes(targetId)
                ? state.chosenCategories.filter((v) => v !== targetId)
                : [...state.chosenCategories, targetId],
        })),
}));

export default useCategoryStore;
