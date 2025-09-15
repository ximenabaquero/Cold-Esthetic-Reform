// Utility functions for the application

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Colombian phone number format
  if (cleaned.startsWith('57')) {
    const number = cleaned.slice(2);
    if (number.length === 10) {
      return `+57 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
    }
  }
  
  return phone;
}

/**
 * Format date for display in Spanish
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Generate WhatsApp URL with pre-filled message
 */
export function generateWhatsAppURL(
  phone: string = process.env.NEXT_PUBLIC_WA_URL || '',
  message: string = ''
): string {
  const encodedMessage = encodeURIComponent(message);
  return `${phone}?text=${encodedMessage}`;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate Colombian phone number
 */
export function isValidColombianPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  // Colombian mobile numbers: 10 digits starting with 3
  // Or with country code: 5731xxxxxxxx
  return /^3\d{9}$/.test(cleaned) || /^573\d{9}$/.test(cleaned);
}

/**
 * Generate random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Slugify text for URLs
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Get time ago in Spanish
 */
export function timeAgo(date: string | Date): string {
  const now = new Date();
  const then = new Date(date);
  const diffInMs = now.getTime() - then.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Hoy';
  if (diffInDays === 1) return 'Ayer';
  if (diffInDays < 7) return `Hace ${diffInDays} días`;
  if (diffInDays < 30) return `Hace ${Math.floor(diffInDays / 7)} semanas`;
  if (diffInDays < 365) return `Hace ${Math.floor(diffInDays / 30)} meses`;
  
  return `Hace ${Math.floor(diffInDays / 365)} años`;
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}