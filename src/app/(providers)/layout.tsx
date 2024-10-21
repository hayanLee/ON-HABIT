import QueryProvider from '@/provider/QueryProvider';
import { PropsWithChildren } from 'react';

const ProviderLayout = ({ children }: PropsWithChildren) => {
    return <QueryProvider>{children}</QueryProvider>;
};

export default ProviderLayout;
