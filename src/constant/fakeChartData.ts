export const fakeChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // 요일
    datasets: [
        {
            label: '이번 주 달성률 (%)',
            data: [75, 50, 100, 80, 90, 40, 60], // 각 요일의 달성률
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)', // Mon
                'rgba(54, 162, 235, 0.5)', // Tue
                'rgba(255, 206, 86, 0.5)', // Wed
                'rgba(75, 192, 192, 0.5)', // Thu
                'rgba(153, 102, 255, 0.5)', // Fri
                'rgba(255, 159, 64, 0.5)', // Sat
                'rgba(99, 255, 132, 0.5)', // Sun
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)', // Mon
                'rgba(54, 162, 235, 1)', // Tue
                'rgba(255, 206, 86, 1)', // Wed
                'rgba(75, 192, 192, 1)', // Thu
                'rgba(153, 102, 255, 1)', // Fri
                'rgba(255, 159, 64, 1)', // Sat
                'rgba(99, 255, 132, 1)', // Sun
            ],
            borderWidth: 1,
        },
    ],
};
