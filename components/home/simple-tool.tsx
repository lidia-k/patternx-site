"use client";
import Image from "next/image";

export default function SimpleTool() {
  return (
    <section className="py-10 container px-4 mx-auto max-w-4xl">
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-7">
        A simple tool for a complex problem
      </h3>
      <p>
        In today&apos;s world of big data, there&apos;s never been more information
        available to work with. Unfortunately, all this data is hard to use,
        especially if it&apos;s been entered by hand or comes from different systems.
        The simple task of figuring out <b>who is who</b> in a spreadsheet or
        database can be a <b>daunting, time-consuming task</b>.
      </p>
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
        That&apos;s where <b>PatternX</b> comes in. We developed the best dynamic and
        scalable solution for de-duplicating and linking datasets, and built a
        simple step-by-step wizard for anyone to use it.
      </p>
    </section>
  );
}
