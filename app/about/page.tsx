import Content from "@/components/layout/content";
import Link from "next/link";

export default function Consulting() {
  return (
    <Content>
      <h1 className="text-2xl md:text-3xl font-bold mb-7">About</h1>
      <p className="mb-2">
        PatternX is a software as a service platform for quickly and accurately
        identifying clusters of similar records across one or more files or
        databases.
      </p>
      <p className="mb-2">
        PatternX is built on top of PatternX, an open source Python library for
        accurate and scalable fuzzy matching, record deduplication, and
        entity-resolution. It was developed by Forest Gregg and Derek Eder,
        partners at DataMade and PatternX LLC, to help clean up and make sense
        of the variety of messy and disjointed data they encountered while
        building and consulting on a wide variety of civic technology projects
        involving campaign finance data, elected officials, health indicators,
        and government budgets.
      </p>
      <p className="mb-2">
        After launching the PatternX library, they realized there was a need for
        a tool that used the same approach, but was usable by non-developers. So
        they set out to build PatternX as a robust, powerful, and easy to use
        online tool that anyone in any industry can use to clean up their data.
      </p>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold mb-7">Team</h1>
      <p className="mb-2">
        PatternX is led by a team of dedicated and experienced engineers and
        data analysts. They have over a decade of experience working with,
        cleaning up, linking, and performing analysis on large datasets from
        public and private sectors.
      </p>
    </Content>
  );
}
