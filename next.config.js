const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  i18n,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    logLevel: process.env['NEXT_PUBLIC_LOGS_LEVEL'],
    environment: process.env['NEXT_PUBLIC_ENVIRONMENT']
  },
  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; connect-src 'self'; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: *; script-src 'self' 'unsafe-eval' 'unsafe-inline' blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; frame-src 'self' *;"
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'sameorigin'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-site'
          }
        ]
      }
    ];
  }
});
