const habitKeys = {
    all: ['habits'] as const,
    habits: () => [...habitKeys.all, 'list'] as const,
};

export default habitKeys;
