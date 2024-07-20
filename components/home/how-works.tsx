"use client";

import {
  faCheck,
  faDownload,
  faTimes,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HowWorks() {
  return (
    <section className="bg-green-500">
      <div className="py-10 container px-4 mx-auto text-white">
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">
          How it works
        </h3>
        <div className="grid gap-4 sm:grid-cols-3 text-center">
          <div className="mb-2 sm:mb-0">
            <FontAwesomeIcon size="3x" icon={faUpload} />
            <h4 className="text-lg mt-4 mb-2 font-semibold">
              Upload your data
            </h4>
            <p className="font-light">
              Upload any spreadsheet or connect directly to your database
            </p>
          </div>

          <div className="mb-2 sm:mb-0">
            <div className="flex justify-center">
              <FontAwesomeIcon size="3x" icon={faCheck} />
              <FontAwesomeIcon size="3x" icon={faTimes} />
            </div>
            <h4 className="text-lg mt-4 mb-2 font-semibold">Train it</h4>
            <p className="font-light">
              You provide training on the right way to identify similar records
              in your data
            </p>
          </div>

          <div className="mb-2 sm:mb-0">
            <FontAwesomeIcon size="3x" icon={faDownload} />
            <h4 className="text-lg mt-4 mb-2 font-semibold">
              Validate and download
            </h4>
            <p className="font-light">
              Matches are automatically found for you to review and then
              download
            </p>
          </div>
        </div>
        <div className="text-center pt-5 text-xl">
          <a href="#" className="hover:underline">Learn more about how it works »</a>
        </div>
      </div>
    </section>
  );
}
