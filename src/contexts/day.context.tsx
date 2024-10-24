'use client';
import { CURRENT_DAY } from '@/constant/dayjs';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface DateContextType {
    selectedDay: string;
    handleChangeDay: (changedDay: string) => void;
}

const initialValue: DateContextType = {
    selectedDay: CURRENT_DAY,
    handleChangeDay: () => {},
};

const DayContext = createContext(initialValue);

export const useDayContext = () => useContext(DayContext);

function DateProvider({ children }: PropsWithChildren) {
    const [selectedDay, setSelectedDay] = useState<string>(initialValue.selectedDay);
    const handleChangeDay = (changedDay: string) => setSelectedDay(changedDay);

    const value = { selectedDay, handleChangeDay };
    return <DayContext.Provider value={value}>{children}</DayContext.Provider>;
}

export default DateProvider;
