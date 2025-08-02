const PROXY_CONFIG = {
  "/api-datajud": {
    target: "https://api-publica.datajud.cnj.jus.br/api_publica_tst/_search",
    secure: false,
    changeOrigin: true,
    pathRewrite: { "^/api-datajud": "" },
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader(
        'Authorization',
        'APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw=='
      );
    }
  }
};
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api-datajud',
    createProxyMiddleware({
      target: 'https://api-publica.datajud.cnj.jus.br', // apenas domínio base
      changeOrigin: true,
      secure: true,
      pathRewrite: { '^/api-datajud': '/api_publica_tst/_search' }, // agora faz o rewrite correto
      onProxyReq: (proxyReq) => {
        proxyReq.setHeader(
          'Authorization',
          'APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw=='
        );
        proxyReq.setHeader('Content-Type', 'application/json');
      }
    })
  );
};

module.exports = PROXY_CONFIG;
