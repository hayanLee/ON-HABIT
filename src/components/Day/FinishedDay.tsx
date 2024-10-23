import clsx from 'clsx';
import { Fragment } from 'react';

const FinishedDay = () => {
    return (
        <Fragment>
            <div className={clsx('flex-center w-11 h-11 rounded-full bg-pink-100')}>
                <span className='subtitle'>✅</span>
            </div>
        </Fragment>
    );
};

export default FinishedDay;
