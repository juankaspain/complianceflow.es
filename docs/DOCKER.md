# Docker Deployment Guide

## Overview

ComplianceFlow includes Docker support for containerized deployments.

## Quick Start

### Development with Docker Compose

```bash
# Start all services (app + Redis)
docker-compose up

# Start in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

### Production Build

```bash
# Build image
docker build -t complianceflow:latest .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://yourdomain.com \
  -e NEXT_PUBLIC_API_URL=https://api.yourdomain.com \
  complianceflow:latest
```

## Multi-Stage Build

Our Dockerfile uses multi-stage builds for optimization:

1. **deps** - Install production dependencies
2. **builder** - Build the application
3. **runner** - Run the application

### Benefits

- Smaller final image size (~150MB vs ~1GB)
- Improved security (no dev dependencies)
- Faster deployments
- Better layer caching

## Environment Variables

### Required

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### Optional

```bash
NODE_ENV=production
DATABASE_URL=postgresql://...
REDIS_URL=redis://redis:6379
NEXT_PUBLIC_POSTHOG_KEY=your_key
```

## Docker Compose Services

### App

Main Next.js application
- Port: 3000
- Auto-restart on failure
- Health checks enabled

### Redis

Caching and session storage
- Port: 6379
- Persistent storage
- Health checks enabled

### PostgreSQL (Optional)

Uncomment in docker-compose.yml if needed
- Port: 5432
- Persistent storage

## Health Checks

The application exposes a health endpoint:

```bash
curl http://localhost:3000/api/health
```

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-12-31T10:00:00.000Z",
  "uptime": 3600,
  "version": "2.0.0",
  "checks": {
    "memory": { "status": "ok" }
  }
}
```

## Production Deployment

### AWS ECS

```bash
# Build and push to ECR
aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin xxx.dkr.ecr.eu-west-1.amazonaws.com
docker build -t complianceflow .
docker tag complianceflow:latest xxx.dkr.ecr.eu-west-1.amazonaws.com/complianceflow:latest
docker push xxx.dkr.ecr.eu-west-1.amazonaws.com/complianceflow:latest
```

### Google Cloud Run

```bash
# Build and deploy
gcloud builds submit --tag gcr.io/PROJECT_ID/complianceflow
gcloud run deploy complianceflow --image gcr.io/PROJECT_ID/complianceflow --platform managed
```

### Kubernetes

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: complianceflow
spec:
  replicas: 3
  selector:
    matchLabels:
      app: complianceflow
  template:
    metadata:
      labels:
        app: complianceflow
    spec:
      containers:
      - name: complianceflow
        image: complianceflow:latest
        ports:
        - containerPort: 3000
        env:
        - name: NEXT_PUBLIC_SITE_URL
          value: "https://yourdomain.com"
        livenessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
```

## Optimization Tips

### 1. Layer Caching

Copy package.json before code to leverage cache:
```dockerfile
COPY package*.json ./
RUN npm ci
COPY . .
```

### 2. Multi-Platform Builds

```bash
docker buildx build --platform linux/amd64,linux/arm64 -t complianceflow .
```

### 3. Build Arguments

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://yourdomain.com \
  --build-arg NEXT_PUBLIC_API_URL=https://api.yourdomain.com \
  -t complianceflow .
```

## Troubleshooting

### Container Won't Start

```bash
# Check logs
docker logs <container-id>

# Check health
docker inspect --format='{{.State.Health.Status}}' <container-id>
```

### High Memory Usage

```bash
# Monitor resources
docker stats

# Limit memory
docker run -m 512m complianceflow
```

### Network Issues

```bash
# Check network
docker network ls
docker network inspect complianceflow_default

# Recreate network
docker-compose down
docker-compose up
```

## Security

### Best Practices

1. **Non-root user**: App runs as `nextjs` user (UID 1001)
2. **Minimal base image**: Using Alpine Linux
3. **No secrets in image**: Use environment variables
4. **Health checks**: Monitor container health
5. **Read-only filesystem**: Where possible

### Scanning for Vulnerabilities

```bash
# Using Docker Scout
docker scout cves complianceflow:latest

# Using Trivy
trivy image complianceflow:latest
```

## Monitoring

### Logging

```bash
# View all logs
docker-compose logs

# Follow logs
docker-compose logs -f app

# Last 100 lines
docker-compose logs --tail=100 app
```

### Metrics

```bash
# Resource usage
docker stats

# Disk usage
docker system df
```

## Backup & Recovery

### Backup Volumes

```bash
# Backup Redis data
docker run --rm \
  -v complianceflow_redis_data:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/redis-backup.tar.gz /data
```

### Restore Volumes

```bash
# Restore Redis data
docker run --rm \
  -v complianceflow_redis_data:/data \
  -v $(pwd):/backup \
  alpine tar xzf /backup/redis-backup.tar.gz -C /
```