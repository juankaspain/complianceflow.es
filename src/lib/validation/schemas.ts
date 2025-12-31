/**
 * Zod validation schemas
 * Centralized validation for forms and API requests
 */

import { z } from 'zod';

// User schemas
export const userSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'La contraseña debe contener mayúsculas, minúsculas y números'
    ),
});

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Contraseña requerida'),
});

export const updateProfileSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  image: z.string().url().optional(),
});

// Organization schemas
export const organizationSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9-]+$/, 'Solo letras minúsculas, números y guiones'),
  description: z.string().optional(),
  website: z.string().url('URL inválida').optional(),
  industry: z.string().optional(),
  size: z.string().optional(),
});

// Audit schemas
export const auditSchema = z.object({
  title: z.string().min(5, 'El título debe tener al menos 5 caracteres'),
  description: z.string().optional(),
  type: z.enum(['INTERNAL', 'EXTERNAL', 'CERTIFICATION', 'COMPLIANCE']),
  frameworkId: z.string().optional(),
  assigneeId: z.string().optional(),
  startDate: z.date().optional(),
  dueDate: z.date().optional(),
});

export const updateAuditStatusSchema = z.object({
  status: z.enum(['DRAFT', 'IN_PROGRESS', 'UNDER_REVIEW', 'COMPLETED', 'ARCHIVED']),
});

// Task schemas
export const taskSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  description: z.string().optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
  status: z.enum(['TODO', 'IN_PROGRESS', 'BLOCKED', 'IN_REVIEW', 'COMPLETED']),
  assigneeId: z.string().optional(),
  dueDate: z.date().optional(),
  auditId: z.string().optional(),
  controlId: z.string().optional(),
});

// Finding schemas
export const findingSchema = z.object({
  title: z.string().min(5, 'El título debe tener al menos 5 caracteres'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
  severity: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
  auditId: z.string(),
  remediation: z.string().optional(),
  dueDate: z.date().optional(),
});

// Comment schemas
export const commentSchema = z.object({
  content: z.string().min(1, 'El comentario no puede estar vacío'),
  taskId: z.string(),
});

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(20, 'El mensaje debe tener al menos 20 caracteres'),
});

// File upload schema
export const fileUploadSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  description: z.string().optional(),
  file: z.instanceof(File).refine(
    (file) => file.size <= 10 * 1024 * 1024, // 10MB
    'El archivo no debe exceder 10MB'
  ),
});

// Search schemas
export const searchSchema = z.object({
  query: z.string().min(1, 'Búsqueda vacía'),
  filters: z.record(z.string()).optional(),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(20),
});

// Pagination schema
export const paginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(20),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
});

// Type inference
export type UserInput = z.infer<typeof userSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type OrganizationInput = z.infer<typeof organizationSchema>;
export type AuditInput = z.infer<typeof auditSchema>;
export type TaskInput = z.infer<typeof taskSchema>;
export type FindingInput = z.infer<typeof findingSchema>;
export type CommentInput = z.infer<typeof commentSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type SearchInput = z.infer<typeof searchSchema>;
export type PaginationInput = z.infer<typeof paginationSchema>;