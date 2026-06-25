const express = require("express");

const app = express();

app.get("/", (_request, response) => {
  response.json({
    name: "node-buildpack-sample",
    message: "Hello from a buildpack-compatible Node.js sample app.",
    endpoints: ["/", "/healthz"]
  });
});

app.get("/healthz", (_request, response) => {
  response.json({ ok: true });
});

app.use((_request, response) => {
  response.status(404).json({ error: "not_found" });
});

if (require.main === module) {
  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`node-buildpack-sample listening on port ${port}`);
  });
}

module.exports = app;
