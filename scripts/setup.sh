#!/bin/bash

# ComplianceFlow Setup Script
# Automates initial project setup

set -e

echo "🚀 ComplianceFlow Setup"
echo "========================"
echo ""

# Check Node.js version
echo "🔍 Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt "18" ]; then
  echo "❌ Node.js 18+ is required. Current version: $(node -v)"
  exit 1
fi
echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm ci
echo "✅ Dependencies installed"
echo ""

# Setup environment
echo "⚙️ Setting up environment..."
if [ ! -f ".env.local" ]; then
  cp .env.example .env.local
  echo "✅ Created .env.local from .env.example"
  echo "⚠️  Please update .env.local with your configuration"
else
  echo "ℹ️ .env.local already exists"
fi
echo ""

# Setup Git hooks
echo "🪝 Setting up Git hooks..."
if [ -d ".git" ]; then
  npx husky install
  echo "✅ Git hooks installed"
else
  echo "⚠️  Not a Git repository, skipping hooks setup"
fi
echo ""

# Run type check
echo "🔍 Running type check..."
npm run type-check
echo "✅ Type check passed"
echo ""

# Run linter
echo "🔧 Running linter..."
npm run lint
echo "✅ Linter passed"
echo ""

# Run tests
echo "🧪 Running tests..."
npm run test:unit
echo "✅ Tests passed"
echo ""

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your configuration"
echo "2. Run 'npm run dev' to start development server"
echo "3. Visit http://localhost:3000"
echo ""
echo "Happy coding! 🚀"