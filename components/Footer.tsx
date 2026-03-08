import Link from "next/link";
import Image from "next/image";

const services = [
  "Mulching",
  "Flower Beds",
  "Planting & Installation",
  "Edging",
  "Paver Installation",
  "Lawn Maintenance",
];

export default function Footer() {
  return (
    <footer className="bg-[#1C150E] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Sunflower Landscaping"
              width={130}
              height={44}
              className="h-10 w-auto mb-5 brightness-[10] saturate-0 opacity-90"
            />
            <p className="text-stone-400 text-sm leading-relaxed mb-5">
              Locally owned landscaping company serving Kansas City and
              surrounding areas. Quality work, fair pricing, every time.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#997E67] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-[#997E67] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-[#CCBEB1] mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-stone-400 text-sm hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-[#CCBEB1] mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Our Work" },
                { href: "/contact", label: "Contact" },
                { href: "/quote", label: "Get a Quote" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-stone-400 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-[#CCBEB1] mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+19135550192"
                  className="text-stone-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-[#997E67] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (913) 555-0192
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@sunflowerlandscaping.com"
                  className="text-stone-400 text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-[#997E67] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  hello@sunflowerlandscaping.com
                </a>
              </li>
              <li className="text-stone-400 text-sm flex items-start gap-2">
                <svg className="w-4 h-4 text-[#997E67] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Kansas City, KS & surrounding areas
              </li>
              <li className="text-stone-400 text-sm flex items-start gap-2">
                <svg className="w-4 h-4 text-[#997E67] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                Mon–Sat: 7am – 6pm
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} Sunflower Landscaping. All rights reserved.
          </p>
          <p className="text-stone-600 text-xs">
            Proudly serving Kansas City since 2020
          </p>
        </div>
      </div>
    </footer>
  );
}
