# Contributing Guide

Thank you for your interest in contributing to ComplianceFlow! This document provides guidelines and best practices.

## Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- Git
- GitHub account
- Code editor (VS Code recommended)

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click 'Fork' on GitHub, then:
   git clone https://github.com/YOUR_USERNAME/complianceflow.es.git
   cd complianceflow.es
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/juankaspain/complianceflow.es.git
   ```

3. **Install dependencies**
   ```bash
   npm ci
   ```

4. **Copy environment variables**
   ```bash
   cp .env.example .env.local
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

## Development Workflow

### Branch Naming

Use the following prefixes:

- `feat/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Test additions/changes
- `chore/` - Maintenance tasks

Example: `feat/add-user-authentication`

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting)
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Tests
- `chore`: Maintenance

**Examples:**
```bash
feat(auth): add social login support
fix(api): resolve race condition in cache
docs(readme): update installation instructions
```

### Code Style

1. **TypeScript**
   - Use strict mode
   - Define types explicitly
   - Avoid `any` type

2. **React Components**
   - Use functional components
   - Use hooks for state
   - Extract reusable logic to custom hooks

3. **Naming Conventions**
   - Components: PascalCase (`UserProfile`)
   - Functions: camelCase (`getUserData`)
   - Constants: UPPER_SNAKE_CASE (`MAX_RETRY_COUNT`)
   - Files: kebab-case (`user-profile.tsx`)

4. **File Organization**
   ```typescript
   // 1. Imports (external first, then internal)
   import React from 'react';
   import { useState } from 'react';
   import { Button } from '@/components/ui';
   
   // 2. Types/Interfaces
   interface Props {
     title: string;
   }
   
   // 3. Component
   export function MyComponent({ title }: Props) {
     // 3a. Hooks
     const [state, setState] = useState();
     
     // 3b. Handlers
     const handleClick = () => {};
     
     // 3c. Effects
     useEffect(() => {}, []);
     
     // 3d. Render
     return <div>{title}</div>;
   }
   ```

### Testing

1. **Unit Tests** (Required for new features)
   ```bash
   npm run test:unit
   ```

2. **E2E Tests** (For critical paths)
   ```bash
   npm run test:e2e
   ```

3. **Coverage** (Aim for 80%+)
   ```bash
   npm run test:unit -- --coverage
   ```

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feat/your-feature
   ```

2. **Make changes and commit**
   ```bash
   git add .
   git commit -m "feat: add your feature"
   ```

3. **Keep branch updated**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

4. **Push to your fork**
   ```bash
   git push origin feat/your-feature
   ```

5. **Create Pull Request**
   - Go to GitHub
   - Click "New Pull Request"
   - Fill in the template
   - Request review

### PR Checklist

- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No console.log statements
- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] Descriptive commit messages
- [ ] PR description is complete

## Code Review

### As Author

1. Respond to feedback promptly
2. Be open to suggestions
3. Keep discussions professional
4. Update PR based on feedback

### As Reviewer

1. Be respectful and constructive
2. Focus on code, not the person
3. Explain your reasoning
4. Approve when ready

## Component Development

### Creating New Components

```typescript
// src/components/features/example/Example.tsx
import React from 'react';
import { logger } from '@/lib/logger';

interface ExampleProps {
  title: string;
  onAction?: () => void;
}

/**
 * Example component description
 * @param title - The title to display
 * @param onAction - Optional callback
 */
export function Example({ title, onAction }: ExampleProps) {
  const handleClick = () => {
    logger.info('Example clicked', { title });
    onAction?.();
  };

  return (
    <div className="example">
      <h2>{title}</h2>
      <button onClick={handleClick}>Action</button>
    </div>
  );
}
```

### Component Testing

```typescript
// src/components/features/example/Example.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Example } from './Example';

describe('Example', () => {
  it('renders title', () => {
    render(<Example title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('calls onAction when clicked', () => {
    const onAction = vi.fn();
    render(<Example title="Test" onAction={onAction} />);
    fireEvent.click(screen.getByText('Action'));
    expect(onAction).toHaveBeenCalled();
  });
});
```

## API Development

### Creating API Routes

```typescript
// src/app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { logger } from '@/lib/logger';

const schema = z.object({
  name: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);
    
    logger.info('API request received', { data });
    
    // Process request
    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error('API error', error as Error);
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
```

## Documentation

### Code Comments

```typescript
/**
 * Calculates user risk score based on compliance data
 * 
 * @param userId - The user identifier
 * @param data - Compliance metrics
 * @returns Risk score (0-100)
 * @throws {ValidationError} If data is invalid
 * 
 * @example
 * const score = calculateRiskScore('user-123', metrics);
 */
export function calculateRiskScore(
  userId: string,
  data: ComplianceData
): number {
  // Implementation
}
```

### README Updates

When adding features:
1. Update main README.md
2. Add usage examples
3. Update API documentation
4. Add to CHANGELOG.md

## Performance Guidelines

1. **Avoid unnecessary re-renders**
   - Use React.memo for expensive components
   - Use useMemo/useCallback appropriately

2. **Optimize images**
   - Use Next.js Image component
   - Provide width/height
   - Use appropriate formats (AVIF/WebP)

3. **Code splitting**
   - Use dynamic imports
   - Lazy load heavy components

4. **API optimization**
   - Cache responses
   - Implement pagination
   - Use efficient queries

## Security Guidelines

1. **Input Validation**
   - Always validate user input
   - Use Zod schemas
   - Sanitize before use

2. **Authentication**
   - Never commit tokens/secrets
   - Use environment variables
   - Implement proper auth flows

3. **Dependencies**
   - Keep updated
   - Review security advisories
   - Use npm audit

## Getting Help

- **GitHub Issues**: For bugs and features
- **Discussions**: For questions
- **Email**: security@complianceflow.es (security issues)

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

Thank you for contributing! 🚀