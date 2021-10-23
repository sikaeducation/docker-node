# Dockerized Node app example

Uses only Docker Compose

## Run the app

```bash
docker-compose up --build
```

## Scaffold out an app

```bash
docker-compose run api sh -c "cd /app && npm init -y && npm install express"
```
