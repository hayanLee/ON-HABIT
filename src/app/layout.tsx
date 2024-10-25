import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
    src: './fonts/PretendardVariable.woff2',
    variable: '--font-pretendard',
});

export const metadata: Metadata = {
    title: 'ON HABIT',
    description: 'habit tracking application',
    icons: {
        icon: '/favicon/favicon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={`${pretendard.variable}`}>
            <body className={`${pretendard.className} antialiased bg-blue-200`}>{children}</body>
        </html>
    );
}
