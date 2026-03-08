import Link from "next/link";

const services = [
  {
    name: "Mulching",
    desc: "Protect your beds, lock in moisture, and give your property a clean, finished look.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18h12M4 14h16M2 10h20M5 6h14" />
      </svg>
    ),
  },
  {
    name: "Flower Beds",
    desc: "Custom-designed flower beds that add color and life to your outdoor space.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V10M12 10C12 10 7 8 7 4a5 5 0 0110 0c0 4-5 6-5 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10c-2 0-5 3-5 6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10c2 0 5 3 5 6" />
      </svg>
    ),
  },
  {
    name: "Planting",
    desc: "Trees, shrubs, perennials, and annuals — planted right the first time.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-8M12 14s-5-1-7-6c2.5 0 5 1 7 4 2-3 4.5-4 7-4-2 5-7 6-7 6z" />
      </svg>
    ),
  },
  {
    name: "Edging",
    desc: "Sharp, clean edges that define your landscape and make your yard look pristine.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20l18-16M3 20h5M3 20v-5" />
      </svg>
    ),
  },
  {
    name: "Pavers",
    desc: "Walkways, patios, and driveways built to last and designed to impress.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    name: "Lawn Maintenance",
    desc: "Regular mowing, trimming, and seasonal cleanups to keep your lawn looking great.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-9 9-4-4-4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Overland Park, KS",
    text: "They completely transformed our backyard. The flower beds look amazing and the mulching was done perfectly. Very professional, showed up on time, and the price was more than fair.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "Leawood, KS",
    text: "Quick quote turnaround, honest pricing, and excellent work. Our paver patio came out incredible. I've already referred them to three of my neighbors.",
    rating: 5,
  },
  {
    name: "Lisa K.",
    location: "Prairie Village, KS",
    text: "The twins really know their craft. Our yard has never looked better. They took their time, cleaned up after themselves, and the results speak for themselves.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#997E67]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Placeholder image component
function PlaceholderImg({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`bg-[#CCBEB1]/30 flex flex-col items-center justify-center gap-2 ${className}`}>
      <svg className="w-8 h-8 text-[#997E67]/50" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9l4-4 4 4 4-5 6 5" />
        <circle cx="7.5" cy="7.5" r="1.5" />
      </svg>
      {label && <span className="text-[#997E67]/60 text-xs font-medium">{label}</span>}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #1C150E 0%, #3d2b1a 45%, #2d4a1e 100%)",
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 65% 55%, rgba(102,73,48,0.35) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-white text-xl font-bold mb-5 tracking-tight">
            Sunflower Landscaping KC
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.08] mb-6 tracking-tight">
            Your Yard.
            <br />
            <span className="text-[#FFDBBB]">Our Passion.</span>
          </h1>
          <p className="text-[#FFDBBB]/90 text-sm md:text-base font-medium mx-auto mb-3 whitespace-nowrap">
            Providing Top-Notch Landscaping Services to the Kansas City Metro Since 2020
          </p>
          <p className="text-white/55 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Transform your space with our expert landscaping and hardscaping
            services. Elevate your outdoor spaces today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-[#664930] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#997E67] transition-colors text-base"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2.5 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/15 transition-colors text-base backdrop-blur-sm"
            >
              Contact Now
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-14 text-white/40 text-xs font-medium tracking-wide">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed & Insured
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Estimates
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              5-Star Rated
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Locally Owned
            </span>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20" />
          <div className="w-1 h-1 rounded-full bg-white/20" />
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-[#997E67] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C150E] leading-tight mb-4">
              Full-Service Landscaping
            </h2>
            <p className="text-stone-500 text-base leading-relaxed">
              Whether you need a seasonal refresh or a complete yard
              transformation, we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-2xl p-7 hover:shadow-md transition-all duration-200 border border-stone-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFDBBB]/40 text-[#664930] flex items-center justify-center mb-5 group-hover:bg-[#FFDBBB]/70 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1C150E] mb-2">
                  {service.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#664930] font-semibold text-sm hover:text-[#3d2b1a] transition-colors"
            >
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image placeholder */}
            <div className="relative">
              <PlaceholderImg
                label="Team photo placeholder"
                className="w-full aspect-[4/3] rounded-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-[#664930] text-white rounded-2xl p-5 shadow-lg">
                <p className="text-3xl font-bold">200+</p>
                <p className="text-sm text-white/70 mt-0.5">Projects Completed</p>
              </div>
            </div>

            <div>
              <p className="text-[#997E67] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Why Sunflower
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C150E] leading-tight mb-6">
                We Treat Every Yard Like It&apos;s Our Own
              </h2>
              <p className="text-stone-500 text-base leading-relaxed mb-8">
                Founded by two brothers who grew up loving the outdoors, Sunflower
                Landscaping is built on the belief that a great yard starts with
                honest work and attention to detail. No shortcuts, no upsells —
                just quality results.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Detailed & Thorough",
                    desc: "We don't cut corners. Every project gets the same care from start to finish.",
                  },
                  {
                    title: "Honest Pricing",
                    desc: "You'll know exactly what you're paying for before any work begins.",
                  },
                  {
                    title: "Local & Reliable",
                    desc: "Kansas City is home. We show up on time and stand behind our work.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#FFDBBB] flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#664930]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#1C150E] font-semibold text-sm mb-0.5">
                        {item.title}
                      </p>
                      <p className="text-stone-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#664930] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#3d2b1a] transition-colors text-sm"
                >
                  Meet the team
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY PREVIEW ─── */}
      <section className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#997E67] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Our Work
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C150E] leading-tight">
                Before & After
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-[#664930] font-semibold text-sm hover:text-[#3d2b1a] transition-colors flex-shrink-0"
            >
              See all projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Front Yard – Mulching & Edging", tag: "Mulching" },
              { label: "Backyard Paver Patio Install", tag: "Pavers" },
              { label: "Flower Bed Renovation", tag: "Flower Beds" },
              { label: "Full Landscape Installation", tag: "Planting" },
            ].map((project) => (
              <div key={project.label} className="bg-white rounded-2xl overflow-hidden border border-stone-100">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <PlaceholderImg
                      label="Before"
                      className="w-full aspect-[4/3]"
                    />
                    <span className="absolute top-3 left-3 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      Before
                    </span>
                  </div>
                  <div className="relative">
                    <PlaceholderImg
                      label="After"
                      className="w-full aspect-[4/3]"
                    />
                    <span className="absolute top-3 left-3 bg-[#664930]/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <p className="text-sm font-medium text-[#1C150E]">
                    {project.label}
                  </p>
                  <span className="text-xs text-[#997E67] bg-[#FFDBBB]/40 px-2.5 py-1 rounded-full font-medium">
                    {project.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-[#997E67] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Reviews
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C150E] leading-tight mb-3">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-2 text-stone-500 text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M21.35 11.1C21.35 16.74 17.02 21 12 21C6.98 21 2.65 16.74 2.65 11.1C2.65 5.46 6.98 1.2 12 1.2C17.02 1.2 21.35 5.46 21.35 11.1Z" fill="#4285F4"/>
                <path d="M12 4.8C14.62 4.8 16.94 5.86 18.59 7.57L16.47 9.69C15.34 8.53 13.75 7.8 12 7.8C8.97 7.8 6.5 10.07 6.09 13H3.07C3.49 7.79 7.26 4.8 12 4.8Z" fill="#EA4335"/>
                <path d="M3.07 13H6.09C6.27 14.58 6.99 16 8.07 17.06L5.95 19.18C4.23 17.5 3.18 15.36 3.07 13Z" fill="#FBBC05"/>
                <path d="M12 19.2C13.75 19.2 15.34 18.47 16.47 17.31L18.59 19.43C16.94 21.14 14.62 22.2 12 22.2V19.2Z" fill="#34A853"/>
                <path d="M21.35 11.1H12V14.1H17.18C16.84 15.48 16.01 16.67 14.87 17.44L17.09 19.66C19.62 18.11 21.35 15.3 21.35 11.1Z" fill="#4285F4"/>
              </svg>
              Rated 5.0 on Google
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#FAF8F5] rounded-2xl p-7 border border-stone-100"
              >
                <StarRating count={t.rating} />
                <p className="text-stone-600 text-sm leading-relaxed mt-4 mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-[#1C150E] font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-stone-400 text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(135deg, #1C150E 0%, #3d2b1a 60%, #664930 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Get a free, no-obligation estimate. We typically respond within a
            few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-[#FFDBBB] text-[#3d2b1a] font-bold px-8 py-4 rounded-full hover:bg-white transition-colors text-base"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+19135550192"
              className="flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-base"
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
