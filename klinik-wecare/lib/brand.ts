/**
 * Brand Configuration for Klinik WeCare Desa Melawati
 * Centralized brand identity settings
 */

export const BRAND = {
  // Clinic Information
  name: "Klinik WeCare Desa Melawati",
  tagline: "Professional Healthcare Services",

  // Brand Colors
  colors: {
    primary: "#283a67", // Main brand color
  },

  // Logo Configuration
  logo: {
    path: "/images/logo.png",
    alt: "Klinik WeCare Desa Melawati Logo",
  },

  // Language
  language: "en",
  locale: "en-US",

  // Contact Information
  contact: {
    whatsapp: "60108904300",
    whatsappMessage: "Hello Klinik WeCare, I would like to enquire.",
    phone: "+60 10-890 4300",
    address: {
      street: "4, Jalan 5/4c, Taman Desa Melawati",
      city: "Kuala Lumpur",
      state: "Wilayah Persekutuan Kuala Lumpur",
      postcode: "53100",
      country: "Malaysia",
      full: "4, Jalan 5/4c, Taman Desa Melawati, 53100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
    },
    email: "klinikwecare@gmail.com",
    googleMapsUrl: "https://maps.google.com/?q=3.218638,101.739088",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5245931234767!2d101.73908809999999!3d3.2186380000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc38451601d1ed%3A0xbaff46b0f8a21044!2sKlinik%20We-Care!5e0!3m2!1sen!2smy!4v1765123440787!5m2!1sen!2smy",
  },

  // Operating Hours
  operatingHours: {
    weekdays: "9:00 AM - 9:00 PM",
    saturday: "9:00 AM - 5:00 PM",
    sunday: "Closed",
    publicHolidays: "Closed",
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/klinikwecare",
    instagram: "https://instagram.com/klinikwecare",
    whatsapp: "60108904300", // Same as contact WhatsApp
  },
} as const;

/**
 * Generate WhatsApp contact URL
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || BRAND.contact.whatsappMessage;
  return `https://wa.me/${BRAND.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
