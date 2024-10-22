'use client';
import dayjs from 'dayjs';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface DateContextType {
    selectedDay: string;
    handleChangeDay: (changedDay: string) => void;
}

const initialValue: DateContextType = {
    selectedDay: dayjs().format('ddd'),
    handleChangeDay: () => {},
};

const DateContext = createContext(initialValue);

export const useDay = () => useContext(DateContext);

function DateProvider({ children }: PropsWithChildren) {
    const [selectedDay, setSelectedDay] = useState<string>(initialValue.selectedDay);
    const handleChangeDay = (changedDay: string) => setSelectedDay(changedDay);

    const value = { selectedDay, handleChangeDay };
    return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
}

export default DateProvider;
