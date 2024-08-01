"use client";

import Content from "@/components/layout/content";
import ContactBox from "@/components/global/contact-box";
import ConsultingForm from "@/components/consulting-form";
import Link from "next/link";


export default function Consulting() {
  return (
    <Content showBanner={true}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
          PatternX Data Consulting Services
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <p className="text-lg mb-4 leading-relaxed">
            As experts in machine learning and data cleaning, we bring extensive
            knowledge and experience in handling complex and challenging
            datasets. Our team is ready to consult with you on leveraging our
            cutting-edge technologies to solve your unique data challenges.
          </p>
          <p className="text-lg mb-4 font-semibold">
            Our comprehensive consulting services include:
          </p>
          <ul className="list-none space-y-3 mb-6">
            {[
              "Data Analysis: In-depth examination of your dataset",
              "Custom Solution Design: Tailored approach to clean and optimize your data",
              "AI-Driven Cleaning: Application of machine learning techniques",
              "Results Review: Detailed walkthrough of the cleaned dataset",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-primary-light rounded-lg p-6 border-l-4 border-primary">
            <p className="text-lg font-semibold text-primary-dark">
              Discover the most cost-effective and technically sound solutions
              for your unique challenges. Schedule a complimentary 30-minute
              consultation with our experts.
            </p>
          </div>
        </div>

        <ConsultingForm />
      </div>
      <ContactBox />
    </Content>
  );
}
