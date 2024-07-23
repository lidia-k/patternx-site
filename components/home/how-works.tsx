"use client";

import {
  faCheck,
  faCheckDouble,
  faTimes,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function HowWorks() {
  return (
    <section className="bg-green-500">
      <div className="py-10 container px-4 mx-auto text-white">
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">
          How PatternX Works
        </h3>
        <div className="grid gap-4 sm:grid-cols-3 text-center">
          <div className="mb-2 sm:mb-0">
            <FontAwesomeIcon size="3x" icon={faUpload} />
            <h4 className="text-lg mt-4 mb-2 font-semibold">
              Assess your data
            </h4>
            <p className="font-light">
              We assess your data in a spreadsheet or database
            </p>
          </div>

          <div className="mb-2 sm:mb-0">
            <div className="flex justify-center">
              <FontAwesomeIcon size="3x" icon={faCheck} />
              <FontAwesomeIcon size="3x" icon={faTimes} />
            </div>
            <h4 className="text-lg mt-4 mb-2 font-semibold">Train AI</h4>
            <p className="font-light">
              We train our AI to identify similar records in your data
            </p>
          </div>

          <div className="mb-2 sm:mb-0">
            <FontAwesomeIcon size="3x" icon={faCheckDouble} />
            <h4 className="text-lg mt-4 mb-2 font-semibold">
              Validate and review
            </h4>
            <p className="font-light">
              Matches are automatically found for your review
            </p>
          </div>
        </div>
        <div className="text-center pt-5 text-xl">
          <Link href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL} className="hover:underline">Learn more about how it works »</Link>
        </div>
      </div>
    </section>
  );
}
