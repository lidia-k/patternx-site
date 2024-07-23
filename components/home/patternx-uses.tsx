"use client";

import Link from "next/link";

export default function PatternXUses() {
  return (
    <section className="py-10 pt-4 container px-4 mx-auto max-w-4xl">
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-7">
        Our Expertise
      </h3>
      <div className="grid sm:grid-cols-2 sm:gap-4">
        <ul className="list-disc ps-10">
          <li>Detecting duplicate records</li>
          <li>Unifying addresse or organization listings</li>
          <li>Master data management</li>
          <li>Merging different database systems</li>
        </ul>
        <ul className="list-disc ps-10">
          <li>Creating a master list of customers or providers</li>
          <li>Cleaning up lists of names and emails</li>
          <li>Finding missing values in finance</li>
          <li>Cross-referencing government records</li>
        </ul>
      </div>
      <p className="text-center pt-5">
        And much more!
        <br />
        Want to know about how we can address your specific needs? Reach out to us at{" "}
        <Link className="text-primary hover:underline" href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}>
          {process.env.NEXT_PUBLIC_EMAIL}
        </Link>
      </p>
    </section>
  );
}
