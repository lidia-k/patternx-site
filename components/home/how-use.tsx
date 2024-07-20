"use client";

import {
  faCheckSquare,
  faLink,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HowUse() {
  return (
    <section className="bg-blue-900">
      <div className="py-10 container px-4 mx-auto text-white">
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">
          How can you use PatternX?
        </h3>
        <div className="grid gap-4 sm:grid-cols-3 text-center">
          <div className="mb-2 sm:mb-0">
            <FontAwesomeIcon size="3x" icon={faTable} />
            <h4 className="text-lg mt-4 mb-2 font-semibold">
              Find duplicates in a spreadsheet
            </h4>
            <p className="font-light">
              Upload a spreadsheet and find all exact and similar records within
              it
            </p>
          </div>

          <div className="mb-2 sm:mb-0">
            <FontAwesomeIcon size="3x" icon={faLink} />
            <h4 className="text-lg mt-4 mb-2 font-semibold">
              Merge multiple files
            </h4>
            <p className="font-light">
              Link together two or more spreadsheets and find overlapping
              records in each
            </p>
          </div>

          <div className="mb-2 sm:mb-0">
            <FontAwesomeIcon size="3x" icon={faCheckSquare} />
            <h4 className="text-lg mt-4 mb-2 font-semibold">
              Check against a canonical list
            </h4>
            <p className="font-light">
              Upload a master list and check new spreadsheets against it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
