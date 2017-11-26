module.exports = {
  type: 'react-app',
  webpack: {
    define: {
      GOOGLE_APIKEY: JSON.stringify(process.env.GOOGLE_APIKEY),
    },
    extra: {
      node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    }
  }
}
