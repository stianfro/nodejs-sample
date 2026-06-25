# Node Buildpack Sample

A minimal Node.js/Express application for testing Cloud Native Buildpacks-compatible deployments.

## Endpoints

- `GET /` returns a welcome payload.
- `GET /healthz` returns `{ "ok": true }` for health checks.

## Run Locally

```bash
npm install
npm start
```

The server listens on `PORT` when it is set, or `8080` by default.

## Test

```bash
npm test
node --check server.js
```

## Buildpack Notes

This project intentionally does not include a Dockerfile. A Node buildpack can detect the app from `package.json`, install dependencies from `package-lock.json`, and launch it with `npm start`.
