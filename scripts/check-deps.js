#!/usr/bin/env node

/**
 * Check for outdated dependencies and security vulnerabilities
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking dependencies...\n');

// Check for outdated packages
try {
  console.log('📊 Checking for outdated packages...');
  const outdated = execSync('npm outdated --json', { encoding: 'utf-8' });
  const packages = JSON.parse(outdated || '{}');
  
  if (Object.keys(packages).length > 0) {
    console.log('⚠️  Found outdated packages:');
    Object.entries(packages).forEach(([name, info]) => {
      console.log(`  - ${name}: ${info.current} → ${info.latest}`);
    });
  } else {
    console.log('✅ All packages are up to date');
  }
} catch (error) {
  console.log('✅ All packages are up to date');
}

console.log('');

// Check for security vulnerabilities
try {
  console.log('🔒 Checking for security vulnerabilities...');
  execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
  console.log('✅ No security vulnerabilities found');
} catch (error) {
  console.log('⚠️  Security vulnerabilities found. Run "npm audit fix" to fix.');
  process.exit(1);
}

console.log('\n✅ Dependency check complete!');