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

const values = [
  {
    title: "Do It Right the First Time",
    desc: "We don't take shortcuts. Every job — big or small — gets the same level of attention. If something isn't right, we fix it before we leave.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Honest Pricing, Always",
    desc: "We quote the job fairly and stick to it. No surprise invoices, no upsells you don't need. You'll always know what you're paying for.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33" />
      </svg>
    ),
  },
  {
    title: "Show Up & Communicate",
    desc: "We show up when we say we will, keep you updated, and answer our phones. Reliability is non-negotiable for us.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Community First",
    desc: "We live and work in Kansas City. We care about the neighborhoods we serve and try to leave every yard better than we found it.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-20 px-6"
        style={{ background: "linear-gradient(160deg, #1C150E 0%, #3d2b1a 60%, #664930 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#FFDBBB]/70 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            Built on Hard Work
            <br />
            and a Love for the Outdoors
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto">
            Sunflower Landscaping was started by two brothers who take real pride
            in their work — and it shows in every job we do.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#997E67] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                How It Started
              </p>
              <h2 className="text-4xl font-bold text-[#1C150E] leading-tight mb-6">
                Two Brothers, One Vision
              </h2>
              <div className="space-y-4 text-stone-500 text-base leading-relaxed">
                <p>
                  Growing up in Kansas City, we spent our summers cutting grass
                  and helping neighbors with their yards. What started as odd
                  jobs turned into a real passion — we loved seeing the
                  transformation that quality landscaping could make to a
                  property.
                </p>
                <p>
                  We launched Sunflower Landscaping because we saw a gap in the
                  market: homeowners wanted someone who would actually show up,
                  do the work right, and charge a fair price. That&apos;s exactly what
                  we set out to be.
                </p>
                <p>
                  Today, we serve dozens of properties across the KC metro —
                  and we still approach every job with the same hustle and
                  attention to detail we had on day one.
                </p>
              </div>
            </div>
            <PlaceholderImg
              label="Team / founders photo"
              className="w-full aspect-[4/3] rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#997E67] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              The Team
            </p>
            <h2 className="text-4xl font-bold text-[#1C150E] leading-tight">
              Meet the Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Founder Name",
                role: "Co-Founder & Lead Installer",
                bio: "Handles operations, client consultations, and leads the installation crew. Has been in landscaping for 8+ years.",
              },
              {
                name: "Founder Name",
                role: "Co-Founder & Design Lead",
                bio: "Manages project design, plant selection, and customer relationships. Brings creative eye and horticultural knowledge.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-[#FAF8F5] rounded-2xl overflow-hidden border border-stone-100"
              >
                <PlaceholderImg
                  label={`${member.name} photo`}
                  className="w-full aspect-[3/2]"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1C150E] mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-[#997E67] text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#997E67] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              How We Operate
            </p>
            <h2 className="text-4xl font-bold text-[#1C150E] leading-tight">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 border border-stone-100"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFDBBB]/40 text-[#664930] flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-base font-bold text-[#1C150E] mb-2">
                  {v.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, #1C150E 0%, #3d2b1a 60%, #664930 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "200+", label: "Projects Completed" },
              { num: "5★", label: "Average Google Rating" },
              { num: "4+", label: "Years in Business" },
              { num: "15+", label: "Cities Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-[#FFDBBB] mb-1">
                  {stat.num}
                </p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white border-t border-stone-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C150E] mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-stone-500 text-base leading-relaxed mb-8">
            We&apos;d love to come take a look at your property and put together a
            free estimate. No pressure, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-[#664930] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#3d2b1a] transition-colors"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="/contact"
              className="border border-[#664930]/30 text-[#664930] font-semibold px-7 py-3.5 rounded-full hover:bg-[#664930]/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
