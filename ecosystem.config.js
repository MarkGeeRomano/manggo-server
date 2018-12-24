module.exports = {
  apps: [{
    name: 'manggo-server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-55-149-172.compute-1.amazonaws.com',
      key: '~/.ssh/chonk_.pem',
      ref: 'origin/master',
      repo: 'git@github.com:MarkGeeRomano/manggo-server.git',
      path: '/home/ubuntu/manggo-server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
