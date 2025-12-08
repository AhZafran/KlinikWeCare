import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "A. Razali",
    review:
      "Had a small surgery done at We Care Clinic, Desa Melawati and couldn't be happier! The team was super friendly, explained everything well, and made me feel comfortable the whole time. Quick, smooth, and great aftercare. Definitely recommend. Thank you Dr Ong and team.",
    rating: 5,
  },
  {
    name: "Hanis Hamdan",
    review:
      "My go-to clinic for the past few months. The doctors are usually very attentive, especially Dr. Ong Li Wen. My children love this clinic too. The staff are also friendly. Highly recommend the Desa Melawati branch.",
    rating: 5,
  },
  {
    name: "Izza Kalsom",
    review:
      "Dr Ong and the team are very courteous and attentive to patients. Dr Ong's explanation was clear and precise. Even when they were back to back with patients, they never missed a smile and explained the high frequency of patients that day.",
    rating: 5,
  },
  {
    name: "Anonymous Parent",
    review:
      "First time visit. The process from registration until we were called was quite long despite we were the only patients, but the staff were professional and the prescribed medication for my kids worked great. We visited a paediatric clinic twice before and their symptoms were getting worse until we found this clinic. My kids got better on the second day after the visit.",
    rating: 5,
  },
  {
    name: "Iffah Firzanah",
    review:
      "I was attended by Dr Ong. She is very kind and really explained my condition in detail. I was satisfied with her treatment and diagnosis. The clinic was also very neat and cosy.",
    rating: 5,
  },
  {
    name: "Azrol Azman",
    review:
      "Layanan doktor yang mesra dan keterangan pasal sakit yang diberikan amat terperinci dan mudah difahami. Layanan staf dan jururawat juga mesra dan ramah. Terima kasih atas layanan yang diberikan.",
    rating: 5,
  },
  {
    name: "Muna Mazlan",
    review:
      "I had an earwax suction treatment and couldn't be happier. The staff were kind and professional, with thorough consultation and excellent service. They made me feel comfortable and handled everything with care. The price was also very affordable. Highly recommended.",
    rating: 5,
  },
  {
    name: "Omarali",
    review:
      "Alhamdulillah very good clinic and helpful staff. Really love the environment at the clinic. Doctor and staff are very friendly. Thank you for the good service.",
    rating: 5,
  },
  {
    name: "Pickersz",
    review:
      "This We-Care Clinic is the best. Dr Shafiz is so friendly and relaxed. I recommend this clinic for surgical treatment, physiotherapy, and more.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Patients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real experiences from our valued patients
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-[#283a67]" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 leading-relaxed relative z-10">
                  "{testimonial.review}"
                </p>

                {/* Patient Name */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">Patient</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-600">
              Reviews are from actual patients who have visited our clinic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
