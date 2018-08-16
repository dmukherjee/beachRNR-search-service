module.exports = {
  apps: [{
    name: 'beachRNR-search-service',
    cwd: '/src/server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-57-228-175.us-west-1.compute.amazonaws.com',
      key: '~/.ssh/search-service.pem',
      ref: 'origin/master',
      repo: 'git@github.com:dmukherjee/beachRNR-search-service.git',
      path: '/home/ubuntu/beachRNR-search-service',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};

