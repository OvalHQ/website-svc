/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // output: 'export',
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ["cdn-images-1.medium.com"],
  },
};

module.exports = nextConfig;
