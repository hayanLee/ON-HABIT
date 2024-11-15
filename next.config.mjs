import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default withPWA({
    ...nextConfig,
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
});
