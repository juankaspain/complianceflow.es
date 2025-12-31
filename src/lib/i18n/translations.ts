import type { Locale } from './config';

/**
 * Translation dictionary
 * In production, these should be loaded from external files or a CMS
 */

type Translations = {
  common: Record<string, string>;
  nav: Record<string, string>;
  hero: Record<string, string>;
  features: Record<string, string>;
  cta: Record<string, string>;
  footer: Record<string, string>;
};

export const translations: Record<Locale, Translations> = {
  es: {
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      retry: 'Reintentar',
      cancel: 'Cancelar',
      save: 'Guardar',
      delete: 'Eliminar',
      edit: 'Editar',
      close: 'Cerrar',
    },
    nav: {
      home: 'Inicio',
      features: 'Características',
      pricing: 'Precios',
      about: 'Acerca de',
      contact: 'Contacto',
      login: 'Iniciar sesión',
      signup: 'Registrarse',
    },
    hero: {
      title: 'Gestión de Cumplimiento Simplificada',
      subtitle: 'La plataforma todo en uno para gestionar tu cumplimiento normativo',
      cta_primary: 'Comenzar gratis',
      cta_secondary: 'Ver demo',
    },
    features: {
      title: 'Características',
      subtitle: 'Todo lo que necesitas para gestionar tu cumplimiento',
    },
    cta: {
      title: '¿Listo para empezar?',
      subtitle: 'Únete a miles de empresas que confían en ComplianceFlow',
      button: 'Comenzar ahora',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
      cookies: 'Política de cookies',
    },
  },
  en: {
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      retry: 'Retry',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
    },
    nav: {
      home: 'Home',
      features: 'Features',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      signup: 'Sign up',
    },
    hero: {
      title: 'Compliance Management Simplified',
      subtitle: 'The all-in-one platform to manage your regulatory compliance',
      cta_primary: 'Start free',
      cta_secondary: 'View demo',
    },
    features: {
      title: 'Features',
      subtitle: 'Everything you need to manage your compliance',
    },
    cta: {
      title: 'Ready to get started?',
      subtitle: 'Join thousands of companies trusting ComplianceFlow',
      button: 'Get started now',
    },
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy',
    },
  },
  fr: {
    common: {
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
      retry: 'Réessayer',
      cancel: 'Annuler',
      save: 'Enregistrer',
      delete: 'Supprimer',
      edit: 'Modifier',
      close: 'Fermer',
    },
    nav: {
      home: 'Accueil',
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      about: 'À propos',
      contact: 'Contact',
      login: 'Connexion',
      signup: "S'inscrire",
    },
    hero: {
      title: 'Gestion de la Conformité Simplifiée',
      subtitle: 'La plateforme tout-en-un pour gérer votre conformité réglementaire',
      cta_primary: 'Commencer gratuitement',
      cta_secondary: 'Voir la démo',
    },
    features: {
      title: 'Fonctionnalités',
      subtitle: 'Tout ce dont vous avez besoin pour gérer votre conformité',
    },
    cta: {
      title: 'Prêt à commencer?',
      subtitle: 'Rejoignez des milliers d\'entreprises qui font confiance à ComplianceFlow',
      button: 'Commencer maintenant',
    },
    footer: {
      rights: 'Tous droits réservés',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      cookies: 'Politique des cookies',
    },
  },
  de: {
    common: {
      loading: 'Laden...',
      error: 'Fehler',
      success: 'Erfolg',
      retry: 'Wiederholen',
      cancel: 'Abbrechen',
      save: 'Speichern',
      delete: 'Löschen',
      edit: 'Bearbeiten',
      close: 'Schließen',
    },
    nav: {
      home: 'Startseite',
      features: 'Funktionen',
      pricing: 'Preise',
      about: 'Über uns',
      contact: 'Kontakt',
      login: 'Anmelden',
      signup: 'Registrieren',
    },
    hero: {
      title: 'Compliance-Management Vereinfacht',
      subtitle: 'Die All-in-One-Plattform für Ihr regulatorisches Compliance-Management',
      cta_primary: 'Kostenlos starten',
      cta_secondary: 'Demo ansehen',
    },
    features: {
      title: 'Funktionen',
      subtitle: 'Alles, was Sie für Ihr Compliance-Management benötigen',
    },
    cta: {
      title: 'Bereit anzufangen?',
      subtitle: 'Schließen Sie sich Tausenden von Unternehmen an, die ComplianceFlow vertrauen',
      button: 'Jetzt starten',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      privacy: 'Datenschutzerklärung',
      terms: 'Nutzungsbedingungen',
      cookies: 'Cookie-Richtlinie',
    },
  },
  pt: {
    common: {
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso',
      retry: 'Tentar novamente',
      cancel: 'Cancelar',
      save: 'Salvar',
      delete: 'Excluir',
      edit: 'Editar',
      close: 'Fechar',
    },
    nav: {
      home: 'Início',
      features: 'Recursos',
      pricing: 'Preços',
      about: 'Sobre',
      contact: 'Contato',
      login: 'Entrar',
      signup: 'Cadastrar',
    },
    hero: {
      title: 'Gestão de Conformidade Simplificada',
      subtitle: 'A plataforma completa para gerenciar sua conformidade regulatória',
      cta_primary: 'Começar grátis',
      cta_secondary: 'Ver demo',
    },
    features: {
      title: 'Recursos',
      subtitle: 'Tudo o que você precisa para gerenciar sua conformidade',
    },
    cta: {
      title: 'Pronto para começar?',
      subtitle: 'Junte-se a milhares de empresas que confiam no ComplianceFlow',
      button: 'Começar agora',
    },
    footer: {
      rights: 'Todos os direitos reservados',
      privacy: 'Política de privacidade',
      terms: 'Termos de serviço',
      cookies: 'Política de cookies',
    },
  },
};

/**
 * Get translation for a key
 */
export function t(
  locale: Locale,
  category: keyof Translations,
  key: string
): string {
  return translations[locale]?.[category]?.[key] || key;
}