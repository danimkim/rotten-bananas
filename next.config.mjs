/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.themoviedb.org"],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" && {
      exclude: ["error"],
    },
  },
};

export default nextConfig;
