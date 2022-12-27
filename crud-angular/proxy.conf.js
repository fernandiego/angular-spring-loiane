const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:8080/api',
        secure: false,
        loglevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;
