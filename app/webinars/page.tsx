'use client';

import { useState } from 'react';
import Link from "next/link";

export default function Webinar() {
  const [formData, setFormData] = useState({
    dateTime: '',
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    organization: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Full-width blue banner */}
      <div className="w-full bg-blue-600 py-12 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-blue-600">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div>
              <h6 className="text-lg font-semibold mb-2">3-Day Webinar Series</h6>
              <h1 className="text-4xl md:text-4xl font-bold mb-2">Unlock the Power of AI in Healthcare Management:</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">AI Literacy for Healthcare Professionals</h2>
              <p className="text-xl">
                Empower Your Healthcare Management Career in the AI Era
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* Registration Form */}
          <div className="md:w-2/5 sticky top-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Register for Free</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <select name="dateTime" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-sm">
                  <option value="">Select start date *</option>
                  <option value="Day 1">Day 1: Building Blocks of AI in Healthcare</option>
                  <option value="Day 2">Day 2: AI Applications in Medical Imaging, Chatbots, and Healthcare Data</option>
                  <option value="Day 3">Day 3: Practical AI Use Cases in Healthcare Data Management</option>
                </select>
                <input name="firstName" placeholder="First name *" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-sm" />
                <input name="lastName" placeholder="Last name *" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-sm" />
                <input name="email" type="email" placeholder="Work email *" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-sm" />
                <input name="jobTitle" placeholder="Job Title *" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-sm" />
                <input name="organization" placeholder="Organization *" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-sm" />
                <select name="role" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded text-sm">
                  <option value="">Your Role *</option>
                  <option value="Healthcare Manager">Healthcare Manager</option>
                  <option value="Clinical Director">Clinical Director</option>
                  <option value="Hospital Administrator">Hospital Administrator</option>
                  <option value="Other">Other</option>
                </select>
                <p className="text-xs text-gray-600">
                  By registering, you agree to our Terms of Service and Privacy Policy.
                </p>
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 text-sm font-semibold">REGISTER NOW FOR FREE</button>
              </form>
            </div>
          </div>

        {/* Description Section */}
        <div className="md:w-2/3">
        <h3 className="text-3xl font-extrabold mb-6 text-blue-700">Feeling Overwhelmed by AI? You&apos;re Not Alone.</h3>
        
        {/* Key Points Section */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md mb-8">
            <h4 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
              Is This Webinar Series for You?
            </h4>
            <ul className="space-y-3 text-gray-700">
            <li className="flex items-center"><span className="mr-2 text-blue-600">✔</span>You understand the importance of AI but aren&apos;t sure where to begin.</li>
            <li className="flex items-center"><span className="mr-2 text-blue-600">✔</span>Existing AI resources seem either too technical or not tailored to healthcare&apos;s unique needs.</li>
            <li className="flex items-center"><span className="mr-2 text-blue-600">✔</span>Your busy schedule leaves little time for in-depth study; you need efficient, targeted learning.</li>
            <li className="flex items-center"><span className="mr-2 text-blue-600">✔</span>You&apos;re looking for guidance to navigate the essentials of AI in healthcare, step by step.</li>
            <li className="flex items-center"><span className="mr-2 text-blue-600">✔</span>You want to form informed opinions and contribute meaningfully to AI discussions at work.</li>
            </ul>
            <p className="mt-4 font-semibold text-blue-800 text-lg">
            If you nodded along, our webinar series is designed specifically for you.
            </p>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-blue-700">Join Our Exclusive 3-Day Webinar Series</h3>
        <p className="text-lg mb-6 text-gray-800">Designed for healthcare professionals who want to harness the power of AI without getting lost in technical jargon.</p>

        <h3 className="text-2xl font-bold mb-4 text-blue-700">Why Attend This Webinar Series?</h3>
        <ul className="list-inside mb-6 text-gray-700 space-y-2">
            <li><span className="mr-2 text-blue-600">✔</span>Step-by-step guidance on the essentials of AI in healthcare</li>
            <li><span className="mr-2 text-blue-600">✔</span>Real-world applications and decision-making strategies</li>
            <li><span className="mr-2 text-blue-600">✔</span>Interactive sessions with industry experts</li>
        </ul>

        <h3 className="text-2xl font-bold mb-4 text-blue-700">What You’ll Gain:</h3>
        <ul className="list-inside mb-6 text-gray-700 space-y-2">
            <li><span className="mr-2 text-blue-600">✔</span><strong>Foundational Knowledge:</strong> A clear understanding of AI fundamentals and their applications in healthcare.</li>
            <li><span className="mr-2 text-blue-600">✔</span><strong>Collaborative Skills:</strong> The ability to work effectively with engineers and data scientists.</li>
            <li><span className="mr-2 text-blue-600">✔</span><strong>Confidence:</strong> Empowerment to make informed decisions about AI implementation.</li>
            <li><span className="mr-2 text-blue-600">✔</span><strong>Practical Insights:</strong> Strategies to leverage AI for improved patient outcomes and operational efficiency.</li>
        </ul>

        <div className="bg-blue-100 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">3-Day Journey to AI Literacy:</h3>
            <p className="text-lg mb-2"><strong>Day 1:</strong> Building Blocks of AI in Healthcare</p>
            <p className="text-lg mb-2"><strong>Day 2:</strong> AI Applications in Medical Imaging, Chatbots, and Healthcare Data</p>
            <p className="text-lg"><strong>Day 3:</strong> Practical AI Use Cases in Healthcare Data Management</p>
        </div>

        <p className="italic text-gray-600 mb-6">&quot;Bridge the gap between technical expertise and practical management. Lead confidently in the evolving landscape of AI-driven healthcare.&quot;</p>

        <p className="mb-6 text-gray-800">Don&apos;t let the AI revolution pass you by. Join us to demystify AI, harness its potential, and lead confidently in the evolving landscape of AI-driven healthcare—all without sacrificing your valuable time or feeling pressured to become a tech expert.</p>

        <p className="mb-6 text-gray-800"><strong className="mb-6 text-blue-600">Ready to take the first step?</strong> Sign up now for our 3-day webinar series, &quot;Unlock the Power of AI in Healthcare Management: AI Literacy for Healthcare Professionals,&quot; and start your journey to AI literacy in healthcare management.</p>

        <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <p className="font-bold text-gray-800">Limited spots available! Reserve yours today!</p>
        </div>
        <p className="italic mb-2 text-red-600">
          We keep our webinars interactive with hands-on practice to ensure optimal learning. Due to this personalized approach, spots are limited. 
        </p>
        </div>
        </div>
      </div>
    </>
  );
}
