module.exports = {
  reactStrictMode: true,
  
  env: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN
  },

  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN
  },

  images: {
    domains: [process.env.IMAGES_DOMAIN],
    path: '/_next/image',
    loader: 'default',
  },
}
