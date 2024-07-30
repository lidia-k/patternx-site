"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function CallToAction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const footerHeight = 200;

      if (currentScrollY > 200 && currentScrollY + windowHeight < documentHeight - footerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-yellow-300 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-2 text-gray-800">
          Clean Data, Clear Results: Eliminate Duplicates Now
        </h3>
        <p className="mb-4 text-gray-700">
          Book a free consultation with our data experts and discover how PatternX can clean up your datasets.
        </p>
        <Link
          href="/consulting"
          className="block w-full bg-blue-600 text-white text-center font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Book Your Free Consultation
        </Link>
      </div>
    </div>
  );
}

