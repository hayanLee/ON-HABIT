'use client';
import CardContainer from '@/components/CardContainer';
import { fakeChartData } from '@/constant/fakeChartData';
import ProgressBar from '@ramonak/react-progress-bar';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyPage = () => {
    return (
        <div className='flex flex-col gap-y-6'>
            <select name='' id=''>
                <option value=''>Last 7 days</option>
                <option value=''>Last 1 month</option>
            </select>

            <CardContainer>
                <h3 className='subtitle'>Weekly progress</h3>
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
                <h3 className='subtitle'>Completed in the last 7 days</h3>
                <Bar
                    data={fakeChartData}
                    options={{
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                            },
                        },
                    }}
                />
            </CardContainer>

            <CardContainer>
                <h3 className='subtitle'>Top 3 habits</h3>
            </CardContainer>
        </div>
    );
};

export default MyPage;
