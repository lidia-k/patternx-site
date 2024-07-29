"use client";
import Image from "next/image";

export default function Problems() {
  return (
    <section className="py-10 container px-4 mx-auto max-w-4xl">
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-7">
        The Duplicate Data Dilemma: We Get It
      </h3>
  
      <div className="space-y-4">
        <p>
          In today&apos;s data-driven world, you&apos;re collecting information from everywhere. 
          But with that comes a massive challenge: <b>duplicate records.</b>
        </p>
        
        <ul className="bg-gray-100 rounded-lg p-6 space-y-4 shadow-md">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong>Manually searching for duplicates?</strong> It&apos;s mind-numbing and error-prone.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong>Merging data from multiple sources?</strong> It&apos;s a recipe for inconsistencies.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span><strong>Trying to create a reliable master list?</strong> It&apos;s a big challenge without specialized tools.</span>
          </li>
        </ul>

        <p>
          This is where <b>PatternX</b> steps in. 
          We provide tailored solutions to de-duplicate and link your datasets, 
          no matter how messy or complex.
        </p>
      </div>
    </section>
    );
  }
