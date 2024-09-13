/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
};

export default nextConfig;
