/** @type {import('next').NextConfig} */
const nextConfig = {
      env: {
            NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ?? "https://wadood-backend.liara.run/",
            cdn: "https://cdn.wadood.online/"
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
