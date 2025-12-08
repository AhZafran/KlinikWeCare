import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/brand";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#283a67] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and About */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <Image
                  src={BRAND.logo.path}
                  alt={BRAND.logo.alt}
                  width={150}
                  height={50}
                  className="h-auto w-auto max-h-12 brightness-0 invert"
                  priority
                />
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {BRAND.tagline}
              </p>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                Your trusted healthcare partner in Desa Melawati, providing
                quality medical care for you and your family.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
                  <span className="text-gray-300">
                    {BRAND.contact.address.full}
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
                  <div className="text-gray-300">
                    <div>{BRAND.contact.phone}</div>
                    <div>{BRAND.contact.whatsapp}</div>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
                  <a
                    href={`mailto:${BRAND.contact.email}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {BRAND.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Operating Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Operating Hours</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
                  <div className="text-gray-300">
                    <div className="font-medium">Monday - Friday</div>
                    <div>{BRAND.operatingHours.weekdays}</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
                  <div className="text-gray-300">
                    <div className="font-medium">Saturday</div>
                    <div>{BRAND.operatingHours.saturday}</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-300" />
                  <div className="text-gray-300">
                    <div className="font-medium">Sunday</div>
                    <div>{BRAND.operatingHours.sunday}</div>
                  </div>
                </li>
                <li className="text-gray-400 text-xs italic mt-2">
                  *{BRAND.operatingHours.publicHolidays} on Public Holidays
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href={BRAND.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={BRAND.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-300 mt-4">
                Connect with us on social media for health tips and updates.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
              <p>
                &copy; {currentYear} {BRAND.name}. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
