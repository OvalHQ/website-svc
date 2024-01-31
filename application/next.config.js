/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    // output: 'export',
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
}

module.exports = nextConfig
