// next.config.mjs (ES Modules)

export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'your-image-hosting-domain.com', // Replace with the actual image hosting domain
          port: '',  // Leave this blank unless a specific port is used
          pathname: '/path-to-images/**',  // Use wildcard (**) to allow all paths under this domain
        },
      ],
    },
  };
  
