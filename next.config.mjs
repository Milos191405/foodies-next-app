/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000, // Forces Next.js to detect file changes
      aggregateTimeout: 300,
    };
    return config;
  },
  experimental: {
    turbo: {}, // Set turbo as an object instead of a boolean
  },
};

export default nextConfig;
