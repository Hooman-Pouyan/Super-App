/** @type {import('next').NextConfig} */
const nextConfig = {
      env: {
            baseurl: process.env.NEXT_PUBLIC_API_URL,
            cdn: process.env.NEXT_PUBLIC_CDN
      },
      images: {
            remotePatterns: [
                  {
                        protocol: "https",
                        hostname: "cdn.wadood.online",
                  },
            ],
      },

};

export default nextConfig;
