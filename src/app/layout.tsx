import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
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
        <html>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-200`}>{children}</body>
        </html>
    );
}
