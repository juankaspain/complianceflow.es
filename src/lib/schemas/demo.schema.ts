import { z } from 'zod';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const ACCEPTED_DOCUMENT_TYPES = ['application/pdf', ...ACCEPTED_IMAGE_TYPES];

export const demoSIISchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'El archivo debe ser menor de 10MB',
    })
    .refine((file) => ACCEPTED_DOCUMENT_TYPES.includes(file.type), {
      message: 'Solo se aceptan archivos PDF, JPG, PNG o WEBP',
    }),
});

export const demoKYCSchema = z.object({
  dni: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'El archivo debe ser menor de 10MB',
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: 'Solo se aceptan imágenes JPG, PNG o WEBP',
    }),
  selfie: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'El archivo debe ser menor de 10MB',
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: 'Solo se aceptan imágenes JPG, PNG o WEBP',
    }),
});

export const demoFraudSchema = z.object({
  amount: z.number().min(0, 'El monto debe ser positivo'),
  currency: z.string().length(3, 'Código de moneda inválido'),
  ip_country: z.string().length(2, 'Código de país inválido'),
  velocity_24h: z.number().min(0).max(1000),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export type DemoSIIInput = z.infer<typeof demoSIISchema>;
export type DemoKYCInput = z.infer<typeof demoKYCSchema>;
export type DemoFraudInput = z.infer<typeof demoFraudSchema>;
export type ContactFormInput = z.infer<typeof contactFormSchema>;