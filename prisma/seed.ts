import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const adminPassword = await hash('admin123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@complianceflow.es' },
    update: {},
    create: {
      email: 'admin@complianceflow.es',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
      emailVerified: new Date(),
    },
  });

  console.log('✅ Created admin user:', admin.email);

  // Create demo organization
  const org = await prisma.organization.upsert({
    where: { slug: 'demo-org' },
    update: {},
    create: {
      name: 'Demo Organization',
      slug: 'demo-org',
      description: 'Demo organization for testing',
      industry: 'Technology',
      size: '50-100',
    },
  });

  console.log('✅ Created demo organization:', org.name);

  // Add admin to organization
  await prisma.organizationMember.upsert({
    where: {
      organizationId_userId: {
        organizationId: org.id,
        userId: admin.id,
      },
    },
    update: {},
    create: {
      organizationId: org.id,
      userId: admin.id,
      role: 'OWNER',
    },
  });

  console.log('✅ Added admin to organization');

  // Create GDPR framework
  const gdpr = await prisma.framework.upsert({
    where: { slug: 'gdpr' },
    update: {},
    create: {
      name: 'GDPR',
      slug: 'gdpr',
      description: 'General Data Protection Regulation',
      version: '2016/679',
      organizationId: org.id,
    },
  });

  console.log('✅ Created GDPR framework');

  // Create sample controls
  const controls = [
    {
      code: 'GDPR-ART-5',
      title: 'Principles relating to processing of personal data',
      description:
        'Personal data shall be processed lawfully, fairly and in a transparent manner',
      category: 'Data Processing',
      priority: 'HIGH',
    },
    {
      code: 'GDPR-ART-6',
      title: 'Lawfulness of processing',
      description: 'Processing shall be lawful only if and to the extent that at least one applies',
      category: 'Legal Basis',
      priority: 'CRITICAL',
    },
    {
      code: 'GDPR-ART-32',
      title: 'Security of processing',
      description:
        'Appropriate technical and organisational measures to ensure a level of security',
      category: 'Security',
      priority: 'HIGH',
    },
  ];

  for (const control of controls) {
    await prisma.control.upsert({
      where: {
        frameworkId_code: {
          frameworkId: gdpr.id,
          code: control.code,
        },
      },
      update: {},
      create: {
        ...control,
        frameworkId: gdpr.id,
      },
    });
  }

  console.log('✅ Created sample controls');

  // Create sample audit
  void await prisma.audit.create({
    data: {
      title: 'Q1 2025 GDPR Compliance Audit',
      description: 'Quarterly compliance audit for GDPR requirements',
      status: 'IN_PROGRESS',
      type: 'INTERNAL',
      organizationId: org.id,
      frameworkId: gdpr.id,
      assigneeId: admin.id,
      startDate: new Date(),
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    },
  });

  console.log('✅ Created sample audit');

  console.log('\n🎉 Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });