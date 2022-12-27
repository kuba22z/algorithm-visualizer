/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {unoptimized: true},
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/dashboard',
                destination: 'https://kuba22z.github.io/api/bbSort',
            },
        ]
    },
}

module.exports = nextConfig
