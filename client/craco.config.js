const path = require('path');
module.exports = {
  webpack: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@graphql': path.resolve(__dirname, 'src/graphql'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
};
