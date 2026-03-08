"use client";

import { useState } from "react";

const services = [
  "Mulching",
  "Flower Beds",
  "Planting & Installation",
  "Edging",
  "Paver Installation",
  "Lawn Maintenance",
  "Trimming & Pruning",
  "Seasonal Cleanup",
  "Not sure — I need advice",
];

const propertyTypes = [
  "Single-family home",
  "Townhouse / Condo",
  "Commercial property",
  "Other",
];

const budgetRanges = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
  "Not sure yet",
];

const timelines = [
  "As soon as possible",
  "Within a few weeks",
  "Within a month or two",
  "Just exploring for now",
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    services: [] as string[],
    propertyType: "",
    budget: "",
    timeline: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
    setSubmitted(true);
  };

  const canProceedStep1 = form.services.length > 0;
  const canProceedStep2 = form.propertyType && form.budget && form.timeline;

  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: "linear-gradient(160deg, #FAF8F5 0%, #FFDBBB/20 100%)" }}
      >
        <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-sm border border-stone-100 text-center">
          <div className="w-16 h-16 rounded-full bg-[#664930]/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#664930]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#1C150E] mb-3">
            Quote Request Received!
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-8">
            Thanks, {form.name}! We&apos;ll review your project details and reach out
            within a few hours to schedule a free walkthrough.
          </p>
          <p className="text-[#997E67] text-sm font-medium mb-1">
            In the meantime, feel free to call us:
          </p>
          <a
            href="tel:+19135550192"
            className="text-[#664930] font-bold text-lg hover:text-[#3d2b1a] transition-colors"
          >
            (913) 555-0192
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20 px-6"
        style={{ background: "linear-gradient(160deg, #1C150E 0%, #3d2b1a 60%, #664930 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#FFDBBB]/70 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Free Estimate
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            Get a Free Quote
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-lg mx-auto">
            Takes less than 2 minutes. No commitment, no spam.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#FAF8F5]">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step >= s
                      ? "bg-[#664930] text-white"
                      : "bg-white border-2 border-stone-200 text-stone-400"
                  }`}
                >
                  {step > s ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    s
                  )}
                </div>
                <span className={`text-xs font-medium ${step >= s ? "text-[#664930]" : "text-stone-400"}`}>
                  {s === 1 ? "Services" : s === 2 ? "Details" : "Contact"}
                </span>
                {s < 3 && (
                  <div className={`flex-1 h-px w-8 ${step > s ? "bg-[#664930]" : "bg-stone-200"}`} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-stone-100 overflow-hidden">
            {/* Step 1: Services */}
            {step === 1 && (
              <div className="p-8">
                <h2 className="text-xl font-bold text-[#1C150E] mb-1.5">
                  What services are you interested in?
                </h2>
                <p className="text-stone-400 text-sm mb-6">
                  Select all that apply.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {services.map((service) => {
                    const selected = form.services.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                          selected
                            ? "bg-[#664930] border-[#664930] text-white"
                            : "bg-[#FAF8F5] border-stone-200 text-stone-600 hover:border-[#997E67]/50 hover:text-[#664930]"
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!canProceedStep1}
                    className={`px-7 py-3 rounded-full text-sm font-semibold transition-colors ${
                      canProceedStep1
                        ? "bg-[#664930] text-white hover:bg-[#3d2b1a]"
                        : "bg-stone-100 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    Continue
                    <svg className="w-4 h-4 inline-block ml-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {step === 2 && (
              <div className="p-8">
                <h2 className="text-xl font-bold text-[#1C150E] mb-1.5">
                  Tell us about the project
                </h2>
                <p className="text-stone-400 text-sm mb-6">
                  This helps us prepare an accurate estimate.
                </p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#3d2b1a] mb-2">
                      Property Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, propertyType: type })}
                          className={`text-left px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                            form.propertyType === type
                              ? "bg-[#664930] border-[#664930] text-white"
                              : "bg-[#FAF8F5] border-stone-200 text-stone-600 hover:border-[#997E67]/50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3d2b1a] mb-2">
                      Approximate Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setForm({ ...form, budget: range })}
                          className={`text-left px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                            form.budget === range
                              ? "bg-[#664930] border-[#664930] text-white"
                              : "bg-[#FAF8F5] border-stone-200 text-stone-600 hover:border-[#997E67]/50"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3d2b1a] mb-2">
                      Preferred Timeline
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {timelines.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm({ ...form, timeline: t })}
                          className={`text-left px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                            form.timeline === t
                              ? "bg-[#664930] border-[#664930] text-white"
                              : "bg-[#FAF8F5] border-stone-200 text-stone-600 hover:border-[#997E67]/50"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!canProceedStep2}
                    className={`px-7 py-3 rounded-full text-sm font-semibold transition-colors ${
                      canProceedStep2
                        ? "bg-[#664930] text-white hover:bg-[#3d2b1a]"
                        : "bg-stone-100 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    Continue
                    <svg className="w-4 h-4 inline-block ml-1.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact info */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="p-8">
                <h2 className="text-xl font-bold text-[#1C150E] mb-1.5">
                  How can we reach you?
                </h2>
                <p className="text-stone-400 text-sm mb-6">
                  We&apos;ll be in touch within a few hours.
                </p>

                <div className="space-y-4">
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
                        className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-stone-400 focus:outline-none focus:border-[#997E67] focus:ring-1 focus:ring-[#997E67]/30 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3d2b1a] mb-1.5">
                        Phone Number <span className="text-[#997E67]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-stone-400 focus:outline-none focus:border-[#997E67] focus:ring-1 focus:ring-[#997E67]/30 transition-colors"
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
                      className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-stone-400 focus:outline-none focus:border-[#997E67] focus:ring-1 focus:ring-[#997E67]/30 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3d2b1a] mb-1.5">
                      Property Address
                    </label>
                    <input
                      type="text"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-stone-400 focus:outline-none focus:border-[#997E67] focus:ring-1 focus:ring-[#997E67]/30 transition-colors"
                      placeholder="123 Main St, Overland Park, KS"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3d2b1a] mb-1.5">
                      Anything else we should know?
                    </label>
                    <textarea
                      rows={3}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#1C1C1C] placeholder:text-stone-400 focus:outline-none focus:border-[#997E67] focus:ring-1 focus:ring-[#997E67]/30 transition-colors resize-none"
                      placeholder="Describe your yard, size of the area, specific requests, etc."
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-5 bg-[#FAF8F5] rounded-xl p-4 border border-stone-100">
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">
                    Your Request Summary
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {form.services.map((s) => (
                      <span key={s} className="text-xs bg-[#FFDBBB]/60 text-[#664930] font-medium px-2.5 py-0.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-stone-400 mt-2">
                    {form.propertyType} · {form.budget} · {form.timeline}
                  </p>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="bg-[#664930] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#3d2b1a] transition-colors text-sm"
                  >
                    Submit Quote Request
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Phone CTA */}
          <div className="mt-6 text-center">
            <p className="text-stone-400 text-sm">
              Prefer to talk?{" "}
              <a href="tel:+19135550192" className="text-[#664930] font-semibold hover:text-[#3d2b1a] transition-colors">
                Call (913) 555-0192
              </a>{" "}
              — we pick up.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
