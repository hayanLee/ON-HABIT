const habitKeys = {
    all: ['habits'] as const,
    habits: () => [...habitKeys.all, 'list'] as const,
    selectedDay: (day: string) => [...habitKeys.habits(), day] as const,
    habit: (id: string) => [...habitKeys.all, id] as const,
};

export default habitKeys;
