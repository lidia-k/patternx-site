import Content from "@/components/layout/content";
import Link from "next/link";

export default function Consulting() {
  return (
    <Content>
      <h1 className="text-2xl md:text-3xl font-bold mb-7">
        PatternX library consulting
      </h1>
      <p className="mb-2">
        As the authors of the PatternX python library, we have extensive
        knowledge and experience in working with tricky and hard to clean-up
        datasets. We&apos;re happy to consult with you in working with our
        cutting-edge de-duplication and entity resolution library.
      </p>
      <p className="mb-2">
        We provide the following consulting services around using the dedupe
        library:
      </p>
      <ul className="list-disc ps-10 mb-4">
        <li>Video or phone consultation</li>
        <li>
          Providing detailed answers to questions related to the dedupe library
          and its implementation
        </li>
        <li>Code review</li>
        <li>Code samples</li>
        <li>Documentation, guides and other written documents</li>
      </ul>
      <p className="mb-2">
        We charge for consulting at $350/hour with a minimum retainer of 10
        hours.
      </p>
      Questions? Ready to get started?{" "}
      <Link
        className="text-blue-600 hover:underline"
        href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}
      >
        Send us an email
      </Link>
      .
    </Content>
  );
}
