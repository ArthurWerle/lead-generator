/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REQUEST_URL: process.env.REQUEST_URL
  }
}

module.exports = nextConfig
