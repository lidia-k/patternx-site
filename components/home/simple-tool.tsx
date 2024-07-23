"use client";
import Image from "next/image";

export default function SimpleTool() {
  return (
    <section className="py-10 container px-4 mx-auto max-w-4xl">
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-7">
        The Challenge of Duplicate Data 
      </h3>
      <p className="text-center">
        <Image
          className="h-auto max-w-full inline-block py-2 w-auto"
          src="/images/tech-small.jpg"
          alt="patternx tech"
          width={300}
          height={171}
        />
      </p>
      <p>
        In today&apos;s world of big data, organizations are abundant with data from various sources. 
        However, this wealth of information often comes with its own set of challenges, 
        particularly when data is manually entered or sourced from different systems. 
        The simple task of identifying <b>duplicate records</b> in a spreadsheet or database 
        can be a <b>daunting, time-consuming task.</b>
        This is where <b>PatternX</b> steps in. We provide trailored solutions for de-duplicating and linking datasets.
      </p>
    </section>
  );
}
