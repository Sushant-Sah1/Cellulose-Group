import React from 'react'
import Navbar from './Navbar';
import covidSlide1 from "../public/Covid-Slide1.jpg"
import covidSlid2 from "../public/Covid-slid2.jpg"

const COVID = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center px-4 py-6">
        <h1 className="text-xl md:text-2xl font-semibold mb-6 text-center">COVID</h1>
        
        <div className="w-full max-w-3xl mb-6">
          <img 
            src={covidSlide1} 
            alt="Effective Antimicrobial Herbal Formulations 1" 
            className="w-full h-auto border-4 border-lime-600 rounded-lg shadow-md mb-6"
          />
        </div>

        <div className="w-full max-w-3xl mb-6">
          <img 
            src={covidSlid2} 
            alt="Effective Antimicrobial Herbal Formulations 2" 
            className="w-full h-auto border-4 border-lime-600 rounded-lg shadow-md mb-6"
          />
        </div>
      </div>
    </>
  );
}

export default COVID;
