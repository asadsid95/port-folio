/** @type {import('next').NextConfig} */
const nextConfig = {
    // to handle images in next
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
          },
        ],
      },

}

module.exports = nextConfig
