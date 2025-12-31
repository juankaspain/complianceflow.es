# API Endpoints Documentation

Complete reference for all API endpoints in ComplianceFlow.

## Base URL

```
Production: https://complianceflow.netlify.app/api
Development: http://localhost:3000/api
```

## Authentication

Most endpoints require authentication using JWT tokens:

```http
Authorization: Bearer <your-jwt-token>
```

---

## Health Check

### GET /api/health

Check if the API is healthy and operational.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-12-31T10:00:00Z",
  "uptime": 3600,
  "environment": "production",
  "version": "2.0.0",
  "checks": {
    "server": "ok",
    "database": "ok",
    "redis": "ok"
  }
}
```

---

## Contact

### POST /api/contact

Submit a contact form message.

**Request Body:**
```json
{
  "name": "Juan García",
  "email": "juan@example.com",
  "subject": "Consulta sobre precios",
  "message": "Me gustaría información sobre el plan Enterprise"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message. We will respond shortly."
}
```

**Error Response:**
```json
{
  "error": "Validation failed",
  "details": [
    {
      "field": "email",
      "message": "Invalid email address"
    }
  ]
}
```

---

## User Management

### POST /api/users/register

Register a new user account.

**Request:**
```json
{
  "name": "María López",
  "email": "maria@example.com",
  "password": "SecurePass123!",
  "organizationName": "ACME Corp"
}
```

**Response:**
```json
{
  "user": {
    "id": "usr_123",
    "email": "maria@example.com",
    "name": "María López"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### POST /api/users/login

Authenticate user and receive JWT token.

**Request:**
```json
{
  "email": "maria@example.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "user": {
    "id": "usr_123",
    "email": "maria@example.com",
    "name": "María López",
    "role": "user"
  },
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expiresAt": "2025-12-31T23:59:59Z"
}
```

### GET /api/users/me

Get current authenticated user.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "id": "usr_123",
  "email": "maria@example.com",
  "name": "María López",
  "role": "user",
  "avatar": "https://...",
  "organization": {
    "id": "org_456",
    "name": "ACME Corp"
  }
}
```

---

## Organizations

### GET /api/organizations/:id

Get organization details.

**Response:**
```json
{
  "id": "org_456",
  "name": "ACME Corp",
  "slug": "acme-corp",
  "plan": "professional",
  "members": 25,
  "createdAt": "2025-01-01T00:00:00Z"
}
```

### PATCH /api/organizations/:id

Update organization settings.

**Request:**
```json
{
  "name": "ACME Corporation",
  "settings": {
    "requireEmailVerification": true,
    "dataRetentionDays": 365
  }
}
```

---

## Compliance Frameworks

### GET /api/frameworks

List all available compliance frameworks.

**Query Parameters:**
- `category` - Filter by category
- `region` - Filter by region
- `page` - Page number (default: 1)
- `limit` - Results per page (default: 20)

**Response:**
```json
{
  "frameworks": [
    {
      "id": "fw_gdpr",
      "name": "GDPR",
      "description": "General Data Protection Regulation",
      "version": "2018",
      "category": "Data Privacy",
      "region": "EU",
      "requirements": 99
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "pages": 3
  }
}
```

### GET /api/frameworks/:id

Get detailed information about a specific framework.

**Response:**
```json
{
  "id": "fw_gdpr",
  "name": "GDPR",
  "description": "General Data Protection Regulation",
  "requirements": [
    {
      "id": "req_1",
      "code": "Art. 5.1(a)",
      "title": "Lawfulness, fairness and transparency",
      "priority": "high",
      "controls": 12
    }
  ]
}
```

---

## Tasks

### GET /api/tasks

List tasks for the current organization.

**Query Parameters:**
- `status` - Filter by status
- `assignedTo` - Filter by assignee
- `priority` - Filter by priority
- `dueDate` - Filter by due date

**Response:**
```json
{
  "tasks": [
    {
      "id": "task_123",
      "title": "Review GDPR compliance",
      "status": "in_progress",
      "priority": "high",
      "dueDate": "2025-12-31",
      "assignedTo": {
        "id": "usr_123",
        "name": "María López"
      }
    }
  ]
}
```

### POST /api/tasks

Create a new task.

**Request:**
```json
{
  "title": "Update privacy policy",
  "description": "Update policy to reflect new regulations",
  "type": "compliance",
  "priority": "high",
  "assignedTo": "usr_123",
  "dueDate": "2025-12-31"
}
```

### PATCH /api/tasks/:id

Update task details.

**Request:**
```json
{
  "status": "completed",
  "completedAt": "2025-12-31T10:00:00Z"
}
```

---

## Audits

### GET /api/audits

List audits.

**Response:**
```json
{
  "audits": [
    {
      "id": "audit_789",
      "name": "Q4 2025 GDPR Audit",
      "type": "internal",
      "status": "in_progress",
      "startDate": "2025-10-01",
      "score": 87
    }
  ]
}
```

### POST /api/audits

Create a new audit.

### GET /api/audits/:id/findings

Get audit findings.

---

## Webhooks

### POST /api/webhooks

Register a webhook endpoint.

**Request:**
```json
{
  "url": "https://your-domain.com/webhook",
  "events": ["task.completed", "audit.created"],
  "secret": "your-webhook-secret"
}
```

**Webhook Payload:**
```json
{
  "event": "task.completed",
  "timestamp": "2025-12-31T10:00:00Z",
  "data": {
    "taskId": "task_123",
    "status": "completed"
  }
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Missing or invalid token |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource doesn't exist |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

## Rate Limiting

- **General endpoints**: 100 requests/minute per IP
- **Authentication endpoints**: 10 requests/minute per IP
- **Webhook endpoints**: 1000 requests/minute

## Pagination

All list endpoints support pagination:

```
GET /api/resource?page=1&limit=20
```

Response includes pagination metadata:

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8,
    "hasNext": true,
    "hasPrev": false
  }
}
```

## Versioning

API version is included in the URL:

```
/api/v1/resource
/api/v2/resource
```

Current version: **v1**