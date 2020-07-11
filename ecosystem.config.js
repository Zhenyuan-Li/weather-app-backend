module.exports = {
  apps: [
    {
      name: 'weather-app',
      script: './dist/index.js',
      instances: 'max',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
