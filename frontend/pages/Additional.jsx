import React from "react";
import Navbar from "./Navbar";

const Additional = () => {
  const sections = [
    {
      title: "Hydrogel",
      img: "/HYDROGEL.jpg",
      points: [
        "Pure, flexible, naturally hydrated hydrogel",
        "3D nanofibrous network with high water retention",
        "Available as wet pellicles or custom shapes/thicknesses",
        "Applications include wound dressings, drug delivery, skincare masks, food industry, and bioprinting",
        "Eco-friendly, biodegradable, and sustainable",
      ],
    },
    {
      title: "Beads & Spheroids",
      img: "/BEADS-SPHEROIDS.jpg",
      points: [
        "Spherical 3D cellulose beads (hydrogel or dried)",
        "High surface area and porous structure with tunable release properties",
        "Applications across drug delivery, agriculture, enzyme immobilization, and cosmetics",
        "Functionalized (magnetic/antimicrobial) for extended uses",
      ],
    },
    {
      title: "Films (Dried)",
      img: "/FILMS.jpg",
      points: [
        "Lightweight, transparent, and strong cellulose-based films",
        "Available in air-dried, oven-dried, hot-pressed, and freeze-dried formats",
        "Tunable films for drug delivery, packaging, electronics, and membranes",
        "Functional options like antimicrobial and nanocomposites",
      ],
    },
    {
      title: "Suspension / Slurry / Powder",
      img: "/SUSPENSIONSLURRYPOWDER.jpg",
      points: [
        "BC nanofibril dispersions, slurries, and powders with high surface area",
        "Stable, shear-thinning gels available in varied concentrations for composites and coatings",
        "Applications in food, inks, rheology modifiers, bioplastics, and liquid crystals",
        "Functionalized forms tailored for separation, filtration, and biomedical uses",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-[90%] max-w-6xl m-auto mt-12 mb-16">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#b33c00] mb-10">
          Cellulose & Composite
        </h1>

        {/* Intro */}
        <p className="text-center text-gray-700 max-w-3xl m-auto mb-12 text-base md:text-lg">
          Bacterial Cellulose (BC) and its derived materials offer a versatile
          platform of eco-friendly, sustainable, and functional materials for
          diverse industrial and biomedical applications.
        </p>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden"
            >
              {/* Image */}
              <img
                src={section.img}
                alt={section.title}
                className="w-full h-56 object-cover border-b border-gray-200"
              />

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#2bbbad] mb-4">
                  {section.title}
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-sm md:text-base">
            For any material requirement or discussion to engineer the material
            to your technical need, please contact:
          </p>
          <p className="text-[#2bbbad] font-medium mt-2">
            mudrika@msme.iith.ac.in
          </p>
        </div>
      </div>
    </>
  );
};

export default Additional;
