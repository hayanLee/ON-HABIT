import DateProvider from '@/contexts/day.context';
import QueryProvider from '@/provider/QueryProvider';
import { PropsWithChildren } from 'react';

const ProviderLayout = ({ children }: PropsWithChildren) => {
    return (
        <QueryProvider>
            <DateProvider>{children}</DateProvider>
        </QueryProvider>
    );
};

export default ProviderLayout;
