"use client";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="text-center bg-center bg-no-repeat bg-[url('/images/banner.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="container px-4 flex flex-col items-center text-white mx-auto max-w-screen-md text-center py-6 lg:py-10">
        <div className="flex mb-4 items-center">
          <Image
            className="inline-block max-w-24 sm:max-w-40 w-auto h-auto"
            src="/images/logo.png"
            alt="PatternX"
            width={160}
            height={160}
          />
          <span className="ms-2 text-4xl sm:text-7xl font-black">
            PatternX
          </span>
        </div>
        <h1 className="text-xl font-black md:text-2xl lg:text-3xl">
          Clean, Repair and Optimize Your Data with AI
        </h1>
      </div>
    </section>
  );
}
