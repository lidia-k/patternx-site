"use client";

import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  showBanner: boolean;
  children: ReactNode;
}

function SmallBanner() {
  return (
    <section className="text-center bg-center bg-no-repeat bg-[url('/images/banner.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="container px-4 flex flex-col items-center text-white mx-auto max-w-screen-md text-center py-6 lg:py-10">
        <div className="flex mb-4 items-center">
          <Image
            className="inline-block max-w-12 sm:max-w-16 w-auto h-auto"
            src="/images/logo.png"
            alt="PatternX"
            width={100}
            height={100}
          />
          <span className="ms-2 text-3xl sm:text-5xl font-extrabold">
            PatternX
          </span>
        </div>
        <h2 className="text-lg font-extrabold md:text-xl">
          Clean, Repair and Optimize Your Data with AI
        </h2>
      </div>
    </section>
  );
}

export default function Content({ showBanner = true, children }: Props) {
  return (
    <main>
      {showBanner ? <SmallBanner /> : null}

      <div className="py-10 container px-4 mx-auto max-w-4xl">{children}</div>
    </main>
  );
}
