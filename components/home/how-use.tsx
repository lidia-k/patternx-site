"use client";

import {
  faCheckCircle,
  faLink,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HowUse() {
  return (
    <section className="bg-blue-900">
      <div className="py-10 container px-4 mx-auto text-white">
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">
          What PatternX Can Do For You
        </h3>
        <div className="grid gap-4 sm:grid-cols-3 text-center">
          <div className="mb-2 sm:mb-0">
            <FontAwesomeIcon size="3x" icon={faTableCells} />
            <h4 className="text-lg mt-4 mb-2 font-semibold">
              Single-Source Cleanup
            </h4>
            <p className="font-light">
              Identify exact and similar records within a single data source
            </p>
          </div>

          <div className="mb-2 sm:mb-0">
            <FontAwesomeIcon size="3x" icon={faLink} />
            <h4 className="text-lg mt-4 mb-2 font-semibold">
              Multi-Source Magic
            </h4>
            <p className="font-light">
              Link and de-duplicate across two or more data sources
            </p>
          </div>

          <div className="mb-2 sm:mb-0">
            <FontAwesomeIcon size="3x" icon={faCheckCircle} />
            <h4 className="text-lg mt-4 mb-2 font-semibold">
              Master List Mastery
            </h4>
            <p className="font-light">
              Create a golden record and easily check new data against it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
