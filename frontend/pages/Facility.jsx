import React from "react";
import Navbar from "./Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Facilities = () => {
  const images = [
    "/facility1.jpg",
    "/facility2.jpg",
    "/facility3.jpg",
    "/facility4.jpg",
    "/facility5.jpg",
  ];

  return (
    <>
      <Navbar />
      <div className="px-6 py-8">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center sm:mb-6 lg:mb-12">Facilities</h1>

        <div className="flex flex-col md:flex-row items-start justify-center gap-4">
          {/* Left Section */}
          <div className="md:w-1/2 text-lg leading-relaxed lg:ml-10">
            <p className="mb-3 font-medium">
              Our lab is equipped with the following
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 px-2">
              <li>Autoclave</li>
              <li>Battery testing system</li>
              <li>Biosafety Cabinet</li>
              <li>Centrifuge</li>
              <li>Drug release Franz diffusion setup</li>
              <li>Freeze Dryer</li>
              <li>Hot air oven</li>
              <li>Hot Plates</li>
              <li>Incubator maintained at 25 °C and 37 °C</li>
              <li>pH meter</li>
              <li>Stability Chamber</li>
              <li>Ultrasonicator</li>
              <li>UV-vis spectrophotometer</li>
              <li>Vacuum oven</li>
              <li>Viscosity Meter</li>
              <li>Vortexer</li>
              <li>Water Bath</li>
              <li>Weighing balance</li>
            </ul>
          </div>

          {/* Right Section - Carousel */}
          <div className="md:w-1/2 mr-12 ">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={src}
                      alt={`Facility ${index + 1}`}
                      className="rounded-lg shadow-md w-full h-[320px] object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />

              {/* Dots */}
              <div className="flex justify-center gap-1 mt-2">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  ></span>
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
