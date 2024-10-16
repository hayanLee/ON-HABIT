import CardContainer from '@/components/CardContainer';

const MyPage = () => {
    return (
        <div className='flex flex-col gap-y-6'>
            <select name='' id=''>
                <option value=''>Last 7 days</option>
                <option value=''>Last 1 month</option>
            </select>

            <CardContainer>
                <h3 className='subtitle'>Weelky progress</h3>
            </CardContainer>

            <CardContainer>
                <h3 className='subtitle'>Completed in the last 7 days</h3>
                graph
            </CardContainer>

            <CardContainer>
                <h3 className='subtitle'>Top 3 habits</h3>
            </CardContainer>
        </div>
    );
};

export default MyPage;
