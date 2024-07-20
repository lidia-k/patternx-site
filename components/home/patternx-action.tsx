"use client";

import { Card } from "flowbite-react";

export default function PatternXAction() {
  return (
    <section className="py-10 pt-4 container px-4 mx-auto">
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-7">
        PatternX in action
      </h3>
      <p className="text-center pb-6">
        Select examples of impactful projects powered by PatternX and the python
        library.
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        <Card
          href="#"
          className="sm:max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://placehold.co/380x250"
        >
          <h5 className="text-md text-center tracking-tight text-red-500 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </Card>
        <Card
          href="#"
          className="sm:max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://placehold.co/380x250"
        >
          <h5 className="text-md text-center tracking-tight text-red-500 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </Card>
        <Card
          href="#"
          className="sm:max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="https://placehold.co/380x250"
        >
          <h5 className="text-md text-center tracking-tight text-red-500 dark:text-white">
            Penumbra project
          </h5>
        </Card>
      </div>
    </section>
  );
}
