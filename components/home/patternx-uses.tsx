"use client";

export default function PatternXUses() {
  return (
    <section className="py-10 pt-4 container px-4 mx-auto max-w-4xl">
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-7">
        PatternX uses
      </h3>
      <div className="grid sm:grid-cols-2 sm:gap-4">
        <ul className="list-disc ps-10">
          <li>De-duplicating customer records</li>
          <li>Combining lists of addresses or businesses</li>
          <li>Master data management</li>
          <li>Merging different database systems</li>
        </ul>
        <ul className="list-disc ps-10">
          <li>Creating a master list of products or parts</li>
          <li>Cleaning up lists of names and emails</li>
          <li>Finding contributions in campaign finance</li>
          <li>Cross-referencing government records</li>
        </ul>
      </div>
      <p className="text-center pt-5">
        And much more!
        <br />
        Not sure about your use case? Drop us a line{" "}
        <a className="text-blue-600 hover:underline" href="mailto:info@patternx.com">
          info@patternx.com
        </a>
      </p>
    </section>
  );
}
