import Content from "@/components/layout/content";
import Link from "next/link";

export default function Consulting() {
  return (
    <Content showBanner={true}>
      <h1 className="text-2xl md:text-3xl font-bold mb-7">
        PatternX Consulting
      </h1>
      <p className="mb-2">
        As experts in machine learning and data cleaning, we bring extensive
        knowledge and experience in handling complex and challenging datasets. 
        Our team is ready to consult with you on leveraging our cutting-edge
        technologies to solve your unique data challenges.
      </p>
      <p className="mb-2">
        We offer comprehensive consulting services around data cleaning, repair, and optimization:
      </p>
      <ul className="list-disc ps-10 mb-6">
        <li className="mb-2">Initial Assessment: Free 30-minute video or phone consultation to understand your specific data challenges</li>
        <li className="mb-2">Data Analysis: In-depth examination of your dataset to identify cleaning and repair needs</li>
        <li className="mb-2">Custom Solution Design: Tailored approach to clean and optimize your data using our advanced technologies</li>
        <li className="mb-2">AI-Driven Cleaning: Application of machine learning techniques for efficient and accurate data cleaning</li>
        <li className="mb-2">Results Review: Detailed walkthrough of the cleaned dataset and improvements made</li>
      </ul>
      <p className="mb-4">
        Our consultation process helps you understand how we can clean and optimize your data, 
        saving you time and resources while ensuring high-quality results.
      </p>
      <p className="mb-4">
        We offer a free initial consultation to get you started.
      </p>
      <Link
        className="text-primary hover:underline"
        href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}
      >
        Send us an email
      </Link>
      {" "}to schedule your free consultation.
    </Content>
  );
}
