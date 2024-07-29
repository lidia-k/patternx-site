'use client';

import { useState } from 'react';
import Content from "@/components/layout/content";
import Link from "next/link";

export default function Consulting() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    problems: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... (submit logic remains the same)
  };

  return (
    <Content showBanner={true}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
          PatternX Data Consulting Services
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <p className="text-lg mb-4 leading-relaxed">
            As experts in machine learning and data cleaning, we bring extensive
            knowledge and experience in handling complex and challenging datasets. 
            Our team is ready to consult with you on leveraging our cutting-edge
            technologies to solve your unique data challenges.
          </p>
          <p className="text-lg mb-4 font-semibold">
            Our comprehensive consulting services include:
          </p>
          <ul className="list-none space-y-3 mb-6">
            {[
              "Data Analysis: In-depth examination of your dataset",
              "Custom Solution Design: Tailored approach to clean and optimize your data",
              "AI-Driven Cleaning: Application of machine learning techniques",
              "Results Review: Detailed walkthrough of the cleaned dataset"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-primary-light rounded-lg p-6 border-l-4 border-primary">
            <p className="text-lg font-semibold text-primary-dark">
            Discover the most cost-effective and technically sound solutions for your unique challenges. 
            Schedule a complimentary 30-minute consultation with our experts.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Schedule Your Free Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: 'name', label: 'Name', type: 'text' },
              { name: 'company', label: 'Company', type: 'text' },
              { name: 'email', label: 'Email', type: 'email' },
              { name: 'phone', label: 'Phone', type: 'tel' },
            ].map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
            ))}
            <div>
              <label htmlFor="problems" className="block text-sm font-medium text-gray-700 mb-1">Problems to Discuss</label>
              <textarea
                id="problems"
                name="problems"
                value={formData.problems}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        
        <div className="text-center">
          <p className="mb-4 text-lg">
            Prefer to reach out directly? We're just an email away.
          </p>
          <Link
            className="text-primary hover:underline text-lg font-semibold"
            href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}
          >
            Send us an email
          </Link>
        </div>
      </div>
    </Content>
  );
}