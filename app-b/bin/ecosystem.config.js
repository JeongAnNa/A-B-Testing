module.exports = {
    apps : [{
      name: 'app',
      script: './bin/www',
      instances: 'max',
      exec_mode: 'cluster'
    }]
};