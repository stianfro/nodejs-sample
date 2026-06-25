const http = require("node:http");

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, { "content-type": "application/json" });
  response.end(JSON.stringify(body));
}

const app = http.createServer((request, response) => {
  if (request.url === "/" && request.method === "GET") {
    sendJson(response, 200, {
      name: "node-buildpack-sample",
      message: "Hello from a buildpack-compatible Node.js sample app.",
      endpoints: ["/", "/healthz"]
    });
    return;
  }

  if (request.url === "/healthz" && request.method === "GET") {
    sendJson(response, 200, { ok: true });
    return;
  }

  sendJson(response, 404, { error: "not_found" });
});

if (require.main === module) {
  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`node-buildpack-sample listening on port ${port}`);
  });
}

module.exports = app;
