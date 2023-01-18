/** @type {import('next').NextConfig} */
// images is required to fix deploying issue with github pages
const nextConfig = {
    images: {unoptimized:true},
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig
