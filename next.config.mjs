/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL ?? 'info@patternx.com',
    }
};

export default nextConfig;
