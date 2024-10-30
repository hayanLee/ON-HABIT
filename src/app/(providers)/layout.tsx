import DateProvider from '@/contexts/DayContext';
import QueryProvider from '@/providers/QueryProvider';
import { PropsWithChildren } from 'react';

const ProviderLayout = ({ children }: PropsWithChildren) => {
    return (
        <QueryProvider>
            <DateProvider>{children}</DateProvider>
        </QueryProvider>
    );
};

export default ProviderLayout;
