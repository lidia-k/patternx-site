"use client";

import Link from "next/link";

export default function Questions() {
  return (
    <section className="py-10 container px-4 mx-auto max-w-4xl">
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-7">
        Questions?
      </h3>
      <p className="text-center">
        We&apos;re happy to help!{" "}
        <Link href="#" className="text-primary hover:underline">
          Read our FAQ
        </Link>
      </p>
    </section>
  );
}
