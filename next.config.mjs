/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**", // Allow all images from randomuser.me
      },
      {
        protocol: "https",
        hostname: "another-domain.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
