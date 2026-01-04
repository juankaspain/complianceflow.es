# Contributing to ComplianceFlow

First off, thank you for considering contributing to ComplianceFlow! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)

## 📜 Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code.

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** (if applicable)
- **Environment** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Create an issue and provide:

- **Clear use case**
- **Expected behavior**
- **Why this enhancement would be useful**
- **Possible implementation** (optional)

### Your First Code Contribution

Unsure where to begin? Look for issues tagged with:

- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed

## 💻 Development Setup

1. **Fork the repository**

2. **Clone your fork**

\`\`\`bash
git clone https://github.com/YOUR-USERNAME/complianceflow.es.git
cd complianceflow.es
\`\`\`

3. **Add upstream remote**

\`\`\`bash
git remote add upstream https://github.com/juankaspain/complianceflow.es.git
\`\`\`

4. **Install dependencies**

\`\`\`bash
npm install
\`\`\`

5. **Create a branch**

\`\`\`bash
git checkout -b feature/my-feature
\`\`\`

6. **Start development**

\`\`\`bash
npm run dev
\`\`\`

## 🔄 Pull Request Process

1. **Update your fork**

\`\`\`bash
git fetch upstream
git rebase upstream/main
\`\`\`

2. **Make your changes**

- Write clean, documented code
- Follow coding standards
- Add tests if applicable
- Update documentation

3. **Test your changes**

\`\`\`bash
npm run build
npm run lint
npm run type-check
\`\`\`

4. **Commit your changes**

\`\`\`bash
git add .
git commit -m "feat: add amazing feature"
\`\`\`

5. **Push to your fork**

\`\`\`bash
git push origin feature/my-feature
\`\`\`

6. **Create Pull Request**

- Use a clear PR title
- Describe your changes
- Link related issues
- Request review

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types (no `any`)
- Use interfaces for object shapes
- Export types when reusable

### React

- Use functional components
- Use hooks appropriately
- Keep components small and focused
- Use proper prop types

### Styling

- Use Tailwind CSS utilities
- Follow mobile-first approach
- Use design system tokens
- Keep styles consistent

### File Naming

- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Constants: `UPPER_SNAKE_CASE`
- Files: `kebab-case.ts`

## 📌 Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

\`\`\`
<type>(<scope>): <description>

[optional body]

[optional footer]
\`\`\`

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

\`\`\`bash
feat(api): add SII invoice validation endpoint
fix(auth): resolve token refresh issue
docs(readme): update installation instructions
refactor(ui): extract button component
\`\`\`

## 🧪 Testing

- Write tests for new features
- Ensure existing tests pass
- Aim for high coverage
- Test edge cases

## 📚 Documentation

- Update README if needed
- Document new features
- Add JSDoc comments
- Update API docs

## ❓ Questions?

Feel free to:

- Open a discussion on GitHub
- Join our Discord
- Email: dev@complianceflow.es

## 🙏 Thank You!

Your contributions make ComplianceFlow better for everyone!

---

Happy coding! 🚀
