import Link from "next/link";

function PlaceholderImg({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`bg-[#CCBEB1]/25 flex flex-col items-center justify-center gap-2 ${className}`}>
      <svg className="w-8 h-8 text-[#997E67]/40" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9l4-4 4 4 4-5 6 5" />
        <circle cx="7.5" cy="7.5" r="1.5" />
      </svg>
      {label && <span className="text-[#997E67]/50 text-xs font-medium">{label}</span>}
    </div>
  );
}

const services = [
  {
    id: "mulching",
    name: "Mulching",
    tagline: "Clean, protective, and polished.",
    desc: "Mulch does more than just look good — it insulates roots, retains moisture, suppresses weeds, and gives your property a finished, maintained appearance year-round. We source quality hardwood and dyed mulches and apply them at the right depth for lasting results.",
    details: [
      "Hardwood, dyed, and cedar mulch options",
      "Proper depth application (2–3 inches)",
      "Existing mulch refresh or full installation",
      "Bed prep and edging included on request",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18h12M4 14h16M2 10h20M5 6h14" />
      </svg>
    ),
  },
  {
    id: "flower-beds",
    name: "Flower Beds",
    tagline: "Color and life, all season long.",
    desc: "A well-designed flower bed can completely change the curb appeal of your home. We design and plant beds using annuals, perennials, and flowering shrubs that thrive in the Kansas City climate — so you get color and texture without the constant maintenance headache.",
    details: [
      "Custom bed design and layout",
      "Seasonal annual and perennial planting",
      "Native and low-maintenance plant options",
      "Mulching and edging included",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V10M12 10C12 10 7 8 7 4a5 5 0 0110 0c0 4-5 6-5 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10c-2 0-5 3-5 6M12 10c2 0 5 3 5 6" />
      </svg>
    ),
  },
  {
    id: "planting",
    name: "Planting & Installation",
    tagline: "The right plant, in the right place.",
    desc: "From ornamental trees to ground cover, we handle the full planting process — sourcing quality plants, preparing the soil, installing correctly, and setting you up for long-term success. We take the time to understand your sun exposure, soil conditions, and aesthetic goals.",
    details: [
      "Trees, shrubs, and ornamental grasses",
      "Soil prep and amendment",
      "Proper spacing and depth",
      "Post-install care instructions",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-8M12 14s-5-1-7-6c2.5 0 5 1 7 4 2-3 4.5-4 7-4-2 5-7 6-7 6z" />
      </svg>
    ),
  },
  {
    id: "edging",
    name: "Edging",
    tagline: "Sharp lines. Serious difference.",
    desc: "Clean edges are what separate a maintained yard from an overgrown one. We use professional bed edgers and string trimmers to cut crisp, defined lines along beds, sidewalks, driveways, and tree rings. It's one of the simplest upgrades with the biggest visual impact.",
    details: [
      "Bed and border edging",
      "Sidewalk and driveway edge cleanup",
      "Tree ring definition",
      "Standalone service or add-on to any visit",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20l18-16M3 20h5M3 20v-5" />
      </svg>
    ),
  },
  {
    id: "pavers",
    name: "Paver Installation",
    tagline: "Patios, walkways, and driveways built to last.",
    desc: "Concrete and brick pavers add structure, function, and serious curb appeal to any outdoor space. We handle everything from design and grading to base preparation and final installation. Our paver work is built to last through Kansas City winters and summers alike.",
    details: [
      "Patios, walkways, and driveways",
      "Concrete, brick, and natural stone options",
      "Proper base preparation and drainage",
      "Polymeric sand sealing",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: "lawn-maintenance",
    name: "Lawn Maintenance",
    tagline: "Consistent care, outstanding results.",
    desc: "Regular lawn maintenance keeps your property looking sharp week after week. We offer mowing, trimming, blowing, and seasonal cleanup services — all done with professional equipment and a consistent crew that knows your property.",
    details: [
      "Weekly and bi-weekly mowing",
      "String trimming and edging",
      "Clipping and debris cleanup",
      "Spring and fall seasonal cleanups",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-9 9-4-4-4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16" />
      </svg>
    ),
  },
  {
    id: "trimming",
    name: "Trimming & Pruning",
    tagline: "Healthy plants, clean structure.",
    desc: "Overgrown shrubs and trees look messy and can actually harm the plant over time. Our trimming and pruning service keeps your plants healthy, structured, and looking intentional. We prune at the right time of year to encourage growth and maintain shape.",
    details: [
      "Shrub and hedge trimming",
      "Ornamental tree shaping",
      "Seasonal pruning schedules",
      "Debris removal included",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
      </svg>
    ),
  },
  {
    id: "cleanup",
    name: "Seasonal Cleanup",
    tagline: "Start and end every season right.",
    desc: "Spring and fall cleanups make a huge difference in the health and appearance of your landscape. We handle leaf removal, bed cleaning, pruning, and prepping your yard for the next season — so you're not stuck doing it yourself on a weekend.",
    details: [
      "Leaf and debris removal",
      "Bed cleanup and prepping",
      "Cutback of ornamental grasses",
      "Spring mulch refresh available",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 9a8 8 0 0114-3.87M20 15a8 8 0 01-14 3.87" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="pt-36 pb-20 px-6"
        style={{ background: "linear-gradient(160deg, #1C150E 0%, #3d2b1a 60%, #664930 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#FFDBBB]/70 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            Everything Your Yard Needs
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto">
            From routine maintenance to full installs — we handle it all with the
            same level of care and detail on every job.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-100 grid grid-cols-1 lg:grid-cols-2"
            >
              {/* Image placeholder — alternates sides */}
              <div className={`order-2 ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                <PlaceholderImg
                  label={`${service.name} photo`}
                  className="w-full h-64 lg:h-full min-h-[240px]"
                />
              </div>

              {/* Content */}
              <div className={`p-8 lg:p-10 order-1 ${i % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="w-12 h-12 rounded-xl bg-[#FFDBBB]/40 text-[#664930] flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <p className="text-[#997E67] text-xs font-semibold tracking-wider uppercase mb-2">
                  {service.tagline}
                </p>
                <h2 className="text-2xl font-bold text-[#1C150E] mb-4">
                  {service.name}
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-sm text-stone-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#997E67] flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-[#664930] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#3d2b1a] transition-colors"
                >
                  Get a Quote
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white border-t border-stone-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C150E] mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-stone-500 text-base leading-relaxed mb-8">
            Give us a call or request a free estimate and we&apos;ll walk you through
            what would make the biggest difference for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-[#664930] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#3d2b1a] transition-colors"
            >
              Request a Free Estimate
            </Link>
            <a
              href="tel:+19135550192"
              className="flex items-center justify-center gap-2 border border-[#664930]/30 text-[#664930] font-semibold px-7 py-3.5 rounded-full hover:bg-[#664930]/5 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (913) 555-0192
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
