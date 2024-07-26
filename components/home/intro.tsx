"use client";

export default function Intro() {
  return (
    <section className="bg-gradient-to-br from-green-500 to-green-600">
      <div className="py-10 container px-4 mx-auto text-white">
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-7 drop-shadow-lg">
          Your Solution for Data De-duplication Headaches
        </h3>
        
        <div className="mb-8 bg-white bg-opacity-30 p-6 rounded-lg">
          <div className="space-y-4 text-lg md:text-xl">
            <p className="flex items-center">
              <span className="text-yellow-300 mr-4 text-2xl">•</span>
              Are you drowning in duplicate data?
            </p>
            <p className="flex items-center">
              <span className="text-yellow-300 mr-4 text-2xl">•</span>
              Wasting hours cleaning up spreadsheets?
            </p>
            <p className="flex items-center">
              <span className="text-yellow-300 mr-4 text-2xl">•</span>
              Struggling to merge databases from different systems?
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-xl font-semibold text-blue-300">
            PatternX is your lifeline in the sea of messy data.
          </p>
          <p className="text-lg">
            We offer advanced data de-duplication services that quickly and accurately identify duplicate entries in your datasets, saving you valuable time and resources.
          </p>
        </div>
      
      </div>
    </section>
  );
}
