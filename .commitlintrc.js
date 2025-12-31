module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation
        'style',    // Code style (formatting)
        'refactor', // Code refactoring
        'perf',     // Performance improvement
        'test',     // Tests
        'chore',    // Maintenance
        'revert',   // Revert commit
        'ci',       // CI/CD changes
        'build',    // Build system
      ],
    ],
    'subject-case': [2, 'never', ['upper-case']],
    'subject-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 100],
  },
};