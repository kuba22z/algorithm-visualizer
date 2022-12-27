/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {unoptimized: true},
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://kuba22z.github.io/api/:path*',
            },
        ]
    },
}

module.exports = nextConfig
