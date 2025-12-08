import Image from "next/image";

// Panel partners data - replace with actual logos
const panelPartners = [
  { name: "AIA", logo: "/images/panels/aia.png" },
  { name: "Prudential", logo: "/images/panels/prudential.png" },
  { name: "Great Eastern", logo: "/images/panels/great-eastern.png" },
  { name: "Allianz", logo: "/images/panels/allianz.png" },
  { name: "Tokio Marine", logo: "/images/panels/tokio-marine.png" },
  { name: "AXA", logo: "/images/panels/axa.png" },
  { name: "MSIG", logo: "/images/panels/msig.png" },
  { name: "Zurich", logo: "/images/panels/zurich.png" },
  { name: "Manulife", logo: "/images/panels/manulife.png" },
  { name: "Etiqa", logo: "/images/panels/etiqa.png" },
  { name: "Takaful Malaysia", logo: "/images/panels/takaful.png" },
  { name: "Liberty Insurance", logo: "/images/panels/liberty.png" },
];

export function OurPanel() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Panel Partners
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We accept medical claims from the following insurance providers
            </p>
          </div>

          {/* Panel Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {panelPartners.map((partner, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center border border-gray-100 hover:border-[#283a67]/20"
              >
                {/* Placeholder for logo - will show partner name until actual logo is added */}
                <div className="flex items-center justify-center w-full h-20">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700 group-hover:text-[#283a67] transition-colors duration-200">
                      {partner.name}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Logo</div>
                  </div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-[#283a67]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg" />
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-600">
              If your insurance provider is not listed, please contact us to check
              availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
