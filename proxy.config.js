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

module.exports = PROXY_CONFIG;
