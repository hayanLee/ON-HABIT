const habitKeys = {
    all: ['habits'] as const,
    habits: () => [...habitKeys.all, 'list'] as const,
    selectedDay: (day: string) => [...habitKeys.habits(), day] as const,
};

export default habitKeys;
