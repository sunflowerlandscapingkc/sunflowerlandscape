"use client";

import { useState } from "react";
import Link from "next/link";

function PlaceholderImg({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`bg-[#CCBEB1]/25 flex flex-col items-center justify-center gap-2 ${className}`}>
      <svg className="w-7 h-7 text-[#997E67]/40" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9l4-4 4 4 4-5 6 5" />
        <circle cx="7.5" cy="7.5" r="1.5" />
      </svg>
      {label && <span className="text-[#997E67]/50 text-xs font-medium">{label}</span>}
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "Front Yard Mulching",
    location: "Overland Park, KS",
    category: "Mulching",
    desc: "Full front yard mulch refresh — cleaned beds, fresh hardwood mulch, and crisp edging.",
  },
  {
    id: 2,
    title: "Backyard Paver Patio",
    location: "Leawood, KS",
    category: "Pavers",
    desc: "12×16 ft concrete paver patio with soldier course border and polymeric sand finish.",
  },
  {
    id: 3,
    title: "Flower Bed Renovation",
    location: "Prairie Village, KS",
    category: "Flower Beds",
    desc: "Removed overgrown shrubs, redesigned with ornamental grasses and seasonal perennials.",
  },
  {
    id: 4,
    title: "Full Landscape Install",
    location: "Shawnee, KS",
    category: "Planting",
    desc: "New construction landscape — trees, shrubs, flower beds, mulch, and edging throughout.",
  },
  {
    id: 5,
    title: "Walkway Installation",
    location: "Lenexa, KS",
    category: "Pavers",
    desc: "Natural stone walkway from driveway to front door with curved design and landscape borders.",
  },
  {
    id: 6,
    title: "Bed Edging Refresh",
    location: "Mission Hills, KS",
    category: "Edging",
    desc: "Clean bed edging throughout the property — made existing landscaping look like new.",
  },
  {
    id: 7,
    title: "Ornamental Tree Planting",
    location: "Olathe, KS",
    category: "Planting",
    desc: "Planted 4 ornamental trees with proper root preparation and soil amendment.",
  },
  {
    id: 8,
    title: "Spring Cleanup & Mulch",
    location: "Merriam, KS",
    category: "Mulching",
    desc: "Complete spring cleanup with bed debris removal, fresh mulch, and light pruning.",
  },
  {
    id: 9,
    title: "Backyard Flower Beds",
    location: "Roeland Park, KS",
    category: "Flower Beds",
    desc: "Built two new raised flower beds along fence line, planted with shade-tolerant perennials.",
  },
];

const categories = ["All", "Mulching", "Flower Beds", "Planting", "Edging", "Pavers"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20 px-6"
        style={{ background: "linear-gradient(160deg, #1C150E 0%, #3d2b1a 60%, #664930 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#FFDBBB]/70 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Our Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
            Before & After Gallery
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto">
            Real projects, real results. Browse our work across Kansas City.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-[#664930] text-white"
                    : "bg-white text-stone-500 border border-stone-200 hover:border-[#664930]/30 hover:text-[#664930]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-100 group"
              >
                {/* Before / After images */}
                <div className="grid grid-cols-2 relative">
                  <div className="relative">
                    <PlaceholderImg
                      label="Before"
                      className="w-full aspect-[4/3]"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-black/50 text-white text-xs font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm">
                      Before
                    </span>
                  </div>
                  <div className="relative">
                    <PlaceholderImg
                      label="After"
                      className="w-full aspect-[4/3]"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-[#664930]/90 text-white text-xs font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm">
                      After
                    </span>
                  </div>
                  {/* Divider line */}
                  <div className="absolute inset-y-0 left-1/2 w-px bg-white/60" />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm font-semibold text-[#1C150E] leading-snug">
                      {project.title}
                    </h3>
                    <span className="text-xs text-[#997E67] bg-[#FFDBBB]/40 px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 mb-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {project.location}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-stone-400">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white border-t border-stone-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C150E] mb-4">
            Want Results Like These?
          </h2>
          <p className="text-stone-500 text-base leading-relaxed mb-8">
            Every project starts with a free estimate. Tell us what you&apos;re working
            with and we&apos;ll come up with a plan.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-[#664930] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#3d2b1a] transition-colors"
          >
            Get a Free Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
