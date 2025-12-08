import Image from "next/image";

const services = [
  {
    title: "Weight Loss Injection",
    description:
      "Offers weight loss injections in Melawati to help you achieve your weight management goals with proven, effective treatments.",
    image: "/images/services/weight-loss-injection.jpg",
  },
  {
    title: "Weight Loss Medicine",
    description:
      "Offers effective weight loss medicine solutions tailored to help you achieve sustainable weight management.",
    image: "/images/services/weight-loss-medicine.jpg",
  },
  {
    title: "Weight Loss Assessment",
    description:
      "Offers personalized weight loss assessments, providing expert guidance for effective and sustainable weight management.",
    image: "/images/services/weight-loss-assessment.jpg",
  },
  {
    title: "Acne Treatment",
    description:
      "Get effective acne treatment at WeCare Clinic in Melawati to achieve clearer, healthier skin with personalized solutions tailored to your needs.",
    image: "/images/services/acne-treatment.jpg",
  },
  {
    title: "Allergy Testing",
    description:
      "WeCare Clinic in Melawati offers allergy testing to identify triggers that may be affecting your skin health, including acne, for personalized treatment plans.",
    image: "/images/services/allergy-testing.jpg",
  },
  {
    title: "Skin Analysis and Consultation",
    description:
      "WeCare Clinic offers skin analysis and consultation in Melawati to help diagnose and treat acne, ensuring personalized skincare solutions for your needs.",
    image: "/images/services/skin-analysis-consultation.jpg",
  },
];

export function OurServices() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive healthcare services tailored to your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={index < 2}
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
