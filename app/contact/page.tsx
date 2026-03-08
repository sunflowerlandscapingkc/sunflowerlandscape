"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20 px-6"
        style={{ background: "linear-gradient(160deg, #1C150E 0%, #3d2b1a 60%, #664930 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#FFDBBB]/70 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            Contact Us
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto">
            Questions, estimates, or just want to chat about your yard — we&apos;re
            easy to reach and quick to respond.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-[#1C150E] mb-8">
              Reach Out Directly
            </h2>

            <div className="space-y-6 mb-10">
              <a
                href="tel:+19135550192"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFDBBB]/40 text-[#664930] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFDBBB]/70 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wide mb-0.5">Phone</p>
                  <p className="text-[#1C150E] font-semibold text-base group-hover:text-[#664930] transition-colors">
                    (913) 555-0192
                  </p>
                  <p className="text-stone-400 text-xs mt-0.5">Tap to call</p>
                </div>
              </a>

              <a
                href="mailto:hello@sunflowerlandscaping.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFDBBB]/40 text-[#664930] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFDBBB]/70 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wide mb-0.5">Email</p>
                  <p className="text-[#1C150E] font-semibold text-base group-hover:text-[#664930] transition-colors">
                    hello@sunflowerlandscaping.com
                  </p>
                  <p className="text-stone-400 text-xs mt-0.5">We typically respond within a few hours</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FFDBBB]/40 text-[#664930] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wide mb-0.5">Service Area</p>
                  <p className="text-[#1C150E] font-semibold text-base">
                    Kansas City & Surrounding Areas
                  </p>
                  <p className="text-stone-400 text-xs mt-0.5">
                    Overland Park, Leawood, Prairie Village, Shawnee, Lenexa, Olathe & more
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FFDBBB]/40 text-[#664930] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-wide mb-0.5">Hours</p>
                  <p className="text-[#1C150E] font-semibold text-base">Mon – Sat: 7am – 6pm</p>
                  <p className="text-stone-400 text-xs mt-0.5">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-stone-100">
              <div className="bg-[#CCBEB1]/20 h-48 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-8 h-8 text-[#997E67]/50 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-[#997E67]/60 text-xs font-medium">Map Placeholder</p>
                  <p className="text-stone-400 text-xs mt-0.5">Kansas City, KS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-[#1C150E] mb-8">
              Send a Message
            </h2>

            {submitted ? (
              <div className="bg-[#664930]/5 border border-[#664930]/20 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#664930]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#664930]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1C150E] mb-2">Message Sent!</h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Thanks for reaching out. We&apos;ll get back to you within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3d2b1a] mb-1.5">
                      Your Name <span className="text-[#997E67]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-stone-400 focus:outline-none focus:border-[#997E67] focus:ring-1 focus:ring-[#997E67]/30 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3d2b1a] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-stone-400 focus:outline-none focus:border-[#997E67] focus:ring-1 focus:ring-[#997E67]/30 transition-colors"
                      placeholder="(913) 555-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3d2b1a] mb-1.5">
                    Email Address <span className="text-[#997E67]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-stone-400 focus:outline-none focus:border-[#997E67] focus:ring-1 focus:ring-[#997E67]/30 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3d2b1a] mb-1.5">
                    Message <span className="text-[#997E67]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-stone-400 focus:outline-none focus:border-[#997E67] focus:ring-1 focus:ring-[#997E67]/30 transition-colors resize-none"
                    placeholder="Tell us about your project or ask us anything..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#664930] text-white font-semibold py-3.5 rounded-xl hover:bg-[#3d2b1a] transition-colors text-sm"
                >
                  Send Message
                </button>

                <p className="text-stone-400 text-xs text-center">
                  Prefer to call?{" "}
                  <a href="tel:+19135550192" className="text-[#664930] hover:underline">
                    (913) 555-0192
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
