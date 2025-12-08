import {
  Award,
  Heart,
  MapPin,
  ParkingCircle,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/brand";

const reasons = [
  {
    icon: Award,
    title: "Experienced Professionals",
    description:
      "Our team of qualified doctors and medical staff bring years of experience in providing quality healthcare services.",
  },
  {
    icon: Heart,
    title: "Friendly Service",
    description:
      "We pride ourselves on delivering compassionate care with a personal touch, making every patient feel comfortable and valued.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description:
      "Strategically located in Desa Melawati, our clinic is easily accessible to serve the local community and surrounding areas.",
  },
  {
    icon: ParkingCircle,
    title: "Easy Parking",
    description:
      "Ample parking space available for our patients, ensuring a hassle-free visit every time you need medical attention.",
  },
  {
    icon: Clock,
    title: "Short Wait Time",
    description:
      "We value your time. Our efficient appointment system ensures minimal waiting time so you can get the care you need quickly.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Committed to providing exceptional healthcare with care and convenience
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center ${
                    index < 3
                      ? 'lg:col-span-2'
                      : index === 3
                      ? 'lg:col-span-2 lg:col-start-2'
                      : 'lg:col-span-2'
                  }`}
                >
                  {/* Icon Circle */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#283a67] mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-lg text-gray-700 mb-6">
              Ready to experience quality healthcare? Get in touch with us today.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#df0000] hover:bg-[#c00000] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Contact Us on WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
