const NextFederationPlugin = require('@module-federation/nextjs-mf');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {unoptimized: true},
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main',
        remotes: {
          app1: `app1@${process.env.app1}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          app2: `app2@${process.env.app2}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          "./counter": "./src/stores/counter.ts",
          "./getToken": "./src/stores/getToken.ts",
          "./button": "./src/components/button.tsx",
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
}

module.exports = nextConfig
