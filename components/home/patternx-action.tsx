"use client";

import { Card } from "flowbite-react";

export default function PatternXAction() {
  return (
    <section className="py-10 pt-10 container px-4 mx-auto">
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-7">
        PatternX at Work
      </h3>
      <p className="text-center pb-6">
        Explore case studies and projects that demonstrate how PatternX tackles real-world data challenges. 
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          <Card
            href="#"
            className="w-full"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://placehold.co/380x250"
          >
            <h5 className="text-md text-center tracking-tight text-red-500 dark:text-white">
              Synthea data project
            </h5>
          </Card>
          <Card
            href="#"
            className="w-full"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://placehold.co/380x250"
          >
            <h5 className="text-md text-center tracking-tight text-red-500 dark:text-white">
              Penumbra project
            </h5>
          </Card>
        </div>
      </div>
    </section>
  );
}
