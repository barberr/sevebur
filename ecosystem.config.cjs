module.exports = {
  apps: [
    {
      name: 'severbur.ru',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        NITRO_HOST: '127.0.0.1',
        NODE_ENV: 'production',
      },
    }
  ]
}

