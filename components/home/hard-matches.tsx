"use client";

import {
  faAlignCenter,
  faCheckCircle,
  faExclamationTriangle,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HardMatches() {
  return (
    <section className="py-10 container px-4 mx-auto max-w-4xl">
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-7">
        We find the hard matches
      </h3>
      <div className="text-lg text-center mb-8">
        <p className="mb-2">
          Real-world data is messy, and Patternx was built to work with it
        </p>
        <p>We find matches even when there are major data quality issues</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">
          <FontAwesomeIcon icon={faKeyboard} /> Typos, misspellings and
          abbreviations
        </h2>
        <p>
          Data that is hand-typed can have misspellings, abbreviations and other
          typos
          <br />
          We match them using powerful text similarity algorithms
        </p>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mb-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-2 border"></th>
                <th scope="col" className="p-2 border">
                  name
                </th>
                <th scope="col" className="p-2 border">
                  address
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border">
                  <strong className="text-red-500">atty</strong> title{" "}
                  <strong className="text-red-500">guaranty</strong> fund
                </td>
                <td className="p-2 border">
                  One S. Wacker Dr. 24th Floor Chicago, IL 60606
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border">
                  attorneys&apos; title guarantee fund, inc.
                </td>
                <td className="p-2 border">
                  1 s. wacker drive 24th floor chicago il 60606
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mb-2">
          <FontAwesomeIcon icon={faAlignCenter} /> Inconsistent formatting
        </h2>
        <p>
          Different people and systems format data differently
          <br />
          We parse out names, addresses and any text to make smart comparisons
        </p>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mb-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-2 border"></th>
                <th scope="col" className="p-2 border">
                  site_name
                </th>
                <th scope="col" className="p-2 border">
                  address
                </th>
                <th scope="col" className="p-2 border">
                  phone
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border bg-yellow-50">
                  Chicago Commons Guadalupano
                </td>
                <td className="p-2 border bg-yellow-50">
                  1814 S. Paulina 60608
                </td>
                <td className="p-2 border bg-yellow-50">6663883</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border bg-yellow-50">
                  Chicago Commons Guadalupano Family Center
                </td>
                <td className="p-2 border bg-yellow-50">
                  1814 South Paulina 60608
                </td>
                <td className="p-2 border bg-yellow-50">6663884</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border bg-yellow-50">
                  Chicago Commons Association - Guadalupano Family Center
                </td>
                <td className="p-2 border bg-yellow-50">1814 S Paulina St </td>
                <td className="p-2 border bg-yellow-50">6663883</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border bg-yellow-50">
                  CHICAGO COMMONS ASSOCIATION GUADALUPANO FAMILY CENTER
                </td>
                <td className="p-2 border bg-yellow-50">
                  1814 S PAULINA 60608
                </td>
                <td className="p-2 border bg-yellow-50">6663883</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mb-2">
          <FontAwesomeIcon icon={faExclamationTriangle} /> Contradictory fields
        </h2>
        <p>
          Sometimes, your data doesn&apos;t agree with itself
          <br />
          We compare using multiple fields to find records with the most
          agreement
        </p>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mb-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-2 border"></th>
                <th scope="col" className="p-2 border">
                  site_name
                </th>
                <th scope="col" className="p-2 border">
                  address
                </th>
                <th scope="col" className="p-2 border">
                  phone
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="bg-green-100 p-2">kennedy-king college</td>
                <td className="bg-red-100 p-2">6301 s halsted street 60621</td>
                <td className="bg-green-100 p-2">6025340</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="bg-green-100 p-2">kennedy-king college</td>
                <td className="bg-red-100 p-2">
                  6800 s wentworth avenue 60621
                </td>
                <td className="bg-green-100 p-2">6025340</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
