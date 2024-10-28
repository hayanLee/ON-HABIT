'use client';
import CardContainer from '@/components/CardContainer';
import { fakeChartData } from '@/constant/fakeChartData';
import ProgressBar from '@ramonak/react-progress-bar';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
ChartJS.defaults.color = '#DEDFE1';
ChartJS.defaults.font.weight = 'bold';

const MyPage = () => {
    return (
        <div className='flex flex-col gap-y-6'>
            <select name='' id='' className='bg-main p-2 rounded font-semibold'>
                <option value=''>Last 7 days</option>
                <option value=''>Last 1 month</option>
            </select>

            <CardContainer>
                <h3 className='subtitle mb-2'>Weekly progress</h3>
                <h4 className='text-2xl font-bold my-2'>67%</h4>
                <ProgressBar
                    completed={67}
                    bgColor='#d8d8d8'
                    isLabelVisible={false}
                    baseBgColor='#070707'
                    labelColor='#e80909'
                />
            </CardContainer>

            <CardContainer>
                <h3 className='subtitle mb-2'>Completed in the last 7 days</h3>

                <Bar
                    data={fakeChartData}
                    options={{
                        responsive: true,
                        datasets: {
                            bar: {
                                barPercentage: 0.4,
                                borderSkipped: true,
                            },
                        },
                        scales: {
                            // x: {
                            //     ticks: {
                            //         color: 'orange',
                            //     },
                            // },
                            y: {
                                // ticks: {
                                //     color: 'green',
                                // },
                                beginAtZero: true,
                                max: 100,
                            },
                        },
                    }}
                />
            </CardContainer>

            <CardContainer>
                <h3 className='subtitle mb-2'>Top 3 habits</h3>
                <div className='flex justify-between'>
                    <div className='aspect-square  bg-secondary brightness-150 flex-col-center p-4 rounded'>
                        <h4 className='subtitle'>💪</h4>
                        <p className=''>Workout</p>
                    </div>
                    <div className='aspect-square bg-secondary brightness-150 flex-col-center p-4 rounded'>
                        <h4 className='subtitle'>🗓️</h4>
                        <p className=''>Planning</p>
                    </div>
                    <div className='aspect-square  bg-secondary brightness-150 flex-col-center p-4 rounded'>
                        <h4 className='subtitle'>📝</h4>
                        <p className=''>Journalling</p>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default MyPage;
