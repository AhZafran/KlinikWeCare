import { BRAND } from "@/lib/brand";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: BRAND.name,
    description: BRAND.tagline,
    image: `https://klinikwecare.com${BRAND.logo.path}`,
    url: "https://klinikwecare.com",
    telephone: BRAND.contact.phone,
    email: BRAND.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.contact.address.street,
      addressLocality: BRAND.contact.address.city,
      addressRegion: BRAND.contact.address.state,
      postalCode: BRAND.contact.address.postcode,
      addressCountry: BRAND.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "3.2186380",
      longitude: "101.7390881",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    sameAs: [BRAND.social.facebook, BRAND.social.instagram],
    medicalSpecialty: [
      "General Practice",
      "Family Medicine",
      "Preventive Medicine",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "General Consultation",
      },
      {
        "@type": "MedicalProcedure",
        name: "Chronic Disease Management",
      },
      {
        "@type": "MedicalProcedure",
        name: "Health Screening",
      },
      {
        "@type": "MedicalProcedure",
        name: "Vaccination Services",
      },
      {
        "@type": "MedicalProcedure",
        name: "Family Medicine",
      },
      {
        "@type": "MedicalProcedure",
        name: "Laboratory Services",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
