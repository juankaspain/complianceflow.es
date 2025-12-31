# API Documentation

## Overview

ComplianceFlow API provides programmatic access to compliance management features.

**Base URL**: `https://api.complianceflow.es`

**API Version**: v1

## Authentication

### API Keys

All API requests require authentication via API key:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.complianceflow.es/v1/endpoint
```

### Obtaining API Key

1. Log in to your account
2. Navigate to Settings > API
3. Click "Generate API Key"
4. Store securely

## Rate Limiting

- **Standard**: 100 requests/minute
- **Premium**: 1000 requests/minute
- **Enterprise**: Custom limits

**Headers**:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

## Error Handling

### Error Response Format

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Missing required field: name",
    "details": {
      "field": "name",
      "reason": "required"
    }
  }
}
```

### Error Codes

| Code | Status | Description |
|------|--------|-------------|
| `INVALID_REQUEST` | 400 | Malformed request |
| `UNAUTHORIZED` | 401 | Invalid credentials |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `RATE_LIMITED` | 429 | Too many requests |
| `SERVER_ERROR` | 500 | Internal server error |

## Endpoints

### Compliance Checks

#### List Checks

```http
GET /v1/compliance/checks
```

**Query Parameters**:
- `page` (int): Page number
- `limit` (int): Results per page (max 100)
- `status` (string): Filter by status
- `date_from` (ISO 8601): Start date
- `date_to` (ISO 8601): End date

**Response**:
```json
{
  "data": [
    {
      "id": "check_123",
      "name": "GDPR Compliance",
      "status": "passed",
      "score": 95,
      "created_at": "2025-01-01T00:00:00Z",
      "updated_at": "2025-01-01T12:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 45,
    "has_more": true
  }
}
```

#### Create Check

```http
POST /v1/compliance/checks
```

**Request Body**:
```json
{
  "name": "GDPR Compliance",
  "type": "gdpr",
  "scope": ["data_processing", "consent"],
  "schedule": "monthly"
}
```

**Response**:
```json
{
  "id": "check_123",
  "status": "pending",
  "created_at": "2025-01-01T00:00:00Z"
}
```

#### Get Check Details

```http
GET /v1/compliance/checks/:id
```

**Response**:
```json
{
  "id": "check_123",
  "name": "GDPR Compliance",
  "type": "gdpr",
  "status": "completed",
  "score": 95,
  "findings": [
    {
      "severity": "low",
      "category": "documentation",
      "description": "Missing privacy policy update",
      "recommendation": "Update privacy policy to include..."
    }
  ],
  "created_at": "2025-01-01T00:00:00Z",
  "completed_at": "2025-01-01T12:00:00Z"
}
```

### Reports

#### Generate Report

```http
POST /v1/reports
```

**Request Body**:
```json
{
  "type": "compliance_summary",
  "format": "pdf",
  "date_range": {
    "from": "2025-01-01",
    "to": "2025-12-31"
  },
  "include": ["checks", "risks", "recommendations"]
}
```

**Response**:
```json
{
  "id": "report_456",
  "status": "generating",
  "estimated_time": 30,
  "download_url": null
}
```

#### Download Report

```http
GET /v1/reports/:id/download
```

**Response**: Binary file (PDF/CSV/JSON)

### Organizations

#### Get Organization

```http
GET /v1/organization
```

**Response**:
```json
{
  "id": "org_789",
  "name": "Acme Corp",
  "plan": "premium",
  "compliance_frameworks": ["gdpr", "iso27001"],
  "settings": {
    "notifications": true,
    "auto_checks": true
  }
}
```

#### Update Organization

```http
PATCH /v1/organization
```

**Request Body**:
```json
{
  "settings": {
    "notifications": false
  }
}
```

## Webhooks

### Configuration

```http
POST /v1/webhooks
```

**Request Body**:
```json
{
  "url": "https://your-domain.com/webhook",
  "events": ["check.completed", "risk.detected"],
  "secret": "your_webhook_secret"
}
```

### Events

#### check.completed

```json
{
  "event": "check.completed",
  "data": {
    "check_id": "check_123",
    "status": "passed",
    "score": 95
  },
  "timestamp": "2025-01-01T12:00:00Z"
}
```

#### risk.detected

```json
{
  "event": "risk.detected",
  "data": {
    "risk_id": "risk_789",
    "severity": "high",
    "description": "Potential data breach detected"
  },
  "timestamp": "2025-01-01T12:00:00Z"
}
```

### Webhook Signature

Validate webhook authenticity:

```javascript
const crypto = require('crypto');

function validateSignature(payload, signature, secret) {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return hash === signature;
}
```

## SDK Examples

### JavaScript/TypeScript

```typescript
import { ApiClient } from '@complianceflow/sdk';

const client = new ApiClient({
  apiKey: process.env.COMPLIANCEFLOW_API_KEY,
});

// List checks
const checks = await client.compliance.listChecks({
  status: 'passed',
  limit: 10,
});

// Create check
const check = await client.compliance.createCheck({
  name: 'GDPR Compliance',
  type: 'gdpr',
});
```

### Python

```python
from complianceflow import Client

client = Client(api_key=os.environ['COMPLIANCEFLOW_API_KEY'])

# List checks
checks = client.compliance.list_checks(
    status='passed',
    limit=10
)

# Create check
check = client.compliance.create_check(
    name='GDPR Compliance',
    type='gdpr'
)
```

## Pagination

All list endpoints support cursor-based pagination:

```http
GET /v1/compliance/checks?cursor=abc123&limit=10
```

**Response**:
```json
{
  "data": [...],
  "pagination": {
    "next_cursor": "def456",
    "has_more": true
  }
}
```

## Filtering

Supported operators:
- `eq`: Equal
- `ne`: Not equal
- `gt`: Greater than
- `lt`: Less than
- `gte`: Greater than or equal
- `lte`: Less than or equal
- `in`: In array

**Example**:
```http
GET /v1/compliance/checks?score[gte]=90&status[in]=passed,pending
```

## Versioning

API version is specified in URL:
```
https://api.complianceflow.es/v1/endpoint
```

Deprecation policy:
- 6 months notice
- Migration guide provided
- Legacy versions supported for 12 months

## Support

- **Documentation**: https://docs.complianceflow.es
- **Status**: https://status.complianceflow.es
- **Support**: api-support@complianceflow.es