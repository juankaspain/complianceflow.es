/**
 * Database schema definitions
 * This file contains TypeScript types for database models
 * Adapt these to your chosen database (PostgreSQL, MySQL, MongoDB, etc.)
 */

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin' | 'superadmin';
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  metadata?: Record<string, unknown>;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  industry?: string;
  size?: 'small' | 'medium' | 'large' | 'enterprise';
  ownerId: string;
  plan: 'free' | 'starter' | 'professional' | 'enterprise';
  billingEmail: string;
  createdAt: Date;
  updatedAt: Date;
  settings?: OrganizationSettings;
}

export interface OrganizationSettings {
  allowedDomains?: string[];
  requireEmailVerification: boolean;
  enableSSO: boolean;
  dataRetentionDays: number;
  customBranding?: {
    primaryColor?: string;
    logo?: string;
  };
}

export interface ComplianceFramework {
  id: string;
  name: string;
  slug: string;
  description: string;
  version: string;
  category: string;
  region?: string;
  requirements: ComplianceRequirement[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ComplianceRequirement {
  id: string;
  frameworkId: string;
  code: string;
  title: string;
  description: string;
  category: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  controls: Control[];
  evidence?: Evidence[];
  status: 'not_started' | 'in_progress' | 'completed' | 'not_applicable';
}

export interface Control {
  id: string;
  requirementId: string;
  name: string;
  description: string;
  type: 'preventive' | 'detective' | 'corrective';
  automated: boolean;
  frequency: 'continuous' | 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'annually';
  owner?: string;
  lastReview?: Date;
  nextReview?: Date;
  status: 'effective' | 'needs_improvement' | 'ineffective';
}

export interface Evidence {
  id: string;
  requirementId: string;
  controlId?: string;
  type: 'document' | 'screenshot' | 'log' | 'report' | 'certificate';
  title: string;
  description?: string;
  fileUrl: string;
  uploadedBy: string;
  uploadedAt: Date;
  validUntil?: Date;
}

export interface Audit {
  id: string;
  organizationId: string;
  frameworkId: string;
  name: string;
  type: 'internal' | 'external' | 'self_assessment';
  status: 'planned' | 'in_progress' | 'completed' | 'cancelled';
  startDate: Date;
  endDate?: Date;
  auditors: string[];
  findings: Finding[];
  score?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Finding {
  id: string;
  auditId: string;
  requirementId: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  recommendation: string;
  status: 'open' | 'in_progress' | 'resolved' | 'accepted_risk';
  assignedTo?: string;
  dueDate?: Date;
  resolvedAt?: Date;
  createdAt: Date;
}

export interface Task {
  id: string;
  organizationId: string;
  title: string;
  description?: string;
  type: 'compliance' | 'audit' | 'training' | 'remediation' | 'other';
  status: 'todo' | 'in_progress' | 'blocked' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: string;
  dueDate?: Date;
  completedAt?: Date;
  relatedId?: string; // ID of related entity (finding, requirement, etc.)
  relatedType?: string;
  tags?: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Document {
  id: string;
  organizationId: string;
  title: string;
  description?: string;
  type: 'policy' | 'procedure' | 'guideline' | 'template' | 'report' | 'other';
  category: string;
  version: string;
  fileUrl: string;
  status: 'draft' | 'review' | 'approved' | 'archived';
  owner: string;
  reviewers?: string[];
  approvedBy?: string;
  approvedAt?: Date;
  nextReview?: Date;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'task' | 'audit' | 'review' | 'deadline' | 'system' | 'other';
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
}