#!/usr/bin/env node

/**
 * Setup script for new developers
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

function exec(command, options = {}) {
  try {
    execSync(command, { stdio: 'inherit', ...options });
    return true;
  } catch (error) {
    return false;
  }
}

async function setup() {
  console.log('🚀 Welcome to ComplianceFlow Setup!\n');

  // Check Node.js version
  console.log('🔍 Checking Node.js version...');
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  
  if (majorVersion < 18) {
    console.log('❌ Node.js 18+ is required. You have:', nodeVersion);
    process.exit(1);
  }
  console.log('✅ Node.js version:', nodeVersion);

  // Install dependencies
  console.log('\n📦 Installing dependencies...');
  if (!exec('npm ci')) {
    console.log('❌ Failed to install dependencies');
    process.exit(1);
  }

  // Setup environment variables
  console.log('\n🔑 Setting up environment variables...');
  const envExists = fs.existsSync('.env.local');
  
  if (envExists) {
    const overwrite = await question('.env.local already exists. Overwrite? (y/N): ');
    if (overwrite.toLowerCase() !== 'y') {
      console.log('ℹ️  Keeping existing .env.local');
    } else {
      fs.copyFileSync('.env.example', '.env.local');
      console.log('✅ Created .env.local from template');
    }
  } else {
    fs.copyFileSync('.env.example', '.env.local');
    console.log('✅ Created .env.local from template');
  }

  // Setup Git hooks
  console.log('\n🪝 Setting up Git hooks...');
  if (!exec('npx husky install')) {
    console.log('⚠️  Failed to setup Git hooks');
  } else {
    console.log('✅ Git hooks configured');
  }

  // Run type check
  console.log('\n🔎 Running type check...');
  if (!exec('npm run type-check')) {
    console.log('⚠️  Type check failed');
  } else {
    console.log('✅ Type check passed');
  }

  console.log('\n✨ Setup complete!\n');
  console.log('Next steps:');
  console.log('  1. Update .env.local with your configuration');
  console.log('  2. Run "npm run dev" to start development server');
  console.log('  3. Read CONTRIBUTING_GUIDE.md for contribution guidelines\n');

  rl.close();
}

setup().catch((error) => {
  console.error('❌ Setup failed:', error);
  process.exit(1);
});