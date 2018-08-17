require('dotenv').config();

module.exports = {
  apps: [{
    name: 'beachRNR-search-service',
    script: './src/server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: process.env.AWS_HOST,
      key: '~/.ssh/beachRNR-search-service.pem',
      ref: 'origin/master',
      repo: 'git@github.com:dmukherjee/beachRNR-search-service.git',
      path: '/home/ubuntu/beachRNR-search-service',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
