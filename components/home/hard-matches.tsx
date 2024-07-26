"use client";

import {
  faAddressBook,
  faAlignCenter,
  faCheckCircle,
  faKeyboard,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HardMatches() {
  return (
    <section className="py-10 container px-4 mx-auto max-w-4xl">
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-7">
        Tackling Hard Matches 
      </h3>
      <div className="text-lg text-center mb-8">
        <p className="mb-2">
          Real-world data is often messy. At PatternX, we've developed advanced
          techinques to handle these challenges. 
        </p>
        <p>Our solutions are designed to identify matches that are challenging to find with the traditional approaches.</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">
          <FontAwesomeIcon icon={faKeyboard} /> Typos, misspellings and
          abbreviations
        </h2>
        <p>
          Manual data entry often leads to errors such as typos, misspellings, and inconsistent abbreviations. 
          <br />
          Our advanced algorithms are designed to recognize and reconcile these discrepancies, 
          ensuring accurate matching.
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
                  email
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border">
                  John{" "}
                  <strong className="text-red-500">Lewis</strong>{" "}
                  Anderson
                </td>
                <td className="p-2 border">
                  jland
                  <strong className="text-red-500">e</strong>
                  rson@hotmail.com
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border">
                  John{" "}
                  <strong className="text-red-500">L.</strong>{" "} 
                  Anderson
                </td>
                <td className="p-2 border">
                  jlandrson@hotmail.com
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mb-2">
          <FontAwesomeIcon icon={faAddressBook} /> Name variations
        </h2>
        <p>
          Names can be written in many different ways from nicknames to formal versions.
          <br />
          Our system is equipped to identify and link these variations.
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
                  organization
                </th>
                <th scope="col" className="p-2 border">
                  email
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border">
                  <strong className="text-red-500">Robert</strong>{" "}
                  Thompson
                </td>
                <td className="p-2 border">
                  LifeLine Medical Group
                </td>
                <td className="p-2 border">
                  thompson.b@lifelinemed.com
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border">
                  <strong className="text-red-500">Bob</strong>{" "} 
                  James Thompson
                </td>
                <td className="p-2 border">
                  LifeLine Medical Group
                </td>
                <td className="p-2 border">
                  thompson.b@lifelinemed.com
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mb-2">
          <FontAwesomeIcon icon={faAlignCenter} /> Inconsistent formatting
        </h2>
        <p>
          Different people and systems format data differently.
          <br />
          We parse and standardize names, addresses and any text to make smart comparisons.
        </p>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 mb-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-2 border"></th>
                <th scope="col" className="p-2 border">
                  organization
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
                  UCSF Medical Center
                </td>
                <td className="p-2 border bg-yellow-50">
                  505 Parnassus Avenue, San Francisco, California 
                </td>
                <td className="p-2 border bg-yellow-50">(415) 476-1000</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border bg-yellow-50">
                  University of California, San Francisco Medical Center
                </td>
                <td className="p-2 border bg-yellow-50">
                  505 Parnassus Ave., SF, CA
                </td>
                <td className="p-2 border bg-yellow-50">415-476-1000</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border bg-yellow-50">
                  San Francisco Medical Center - University of California
                </td>
                <td className="p-2 border bg-yellow-50">505 Parnassus, San Francisco </td>
                <td className="p-2 border bg-yellow-50">4154761000</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="p-2 border bg-yellow-50">
                  UC San Francisco Med Center
                </td>
                <td className="p-2 border bg-yellow-50">
                  505 PARNASSUS, SAN FRANCISCO
                </td>
                <td className="p-2 border bg-yellow-50">+1 415 476 1000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mb-2">
          <FontAwesomeIcon icon={faWarning} /> Contradictory fields
        </h2>
        <p>
          In some cases, data about the same entry contains contradictory information. 
          <br />
          We compare using multiple fields to identify the most likely matches.
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
                  organization
                </th>
                <th scope="col" className="p-2 border">
                  national provider identifier
                </th>
                <th scope="col" className="p-2 border">
                  email
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="bg-green-100 p-2">Dr. Elena R. Martinez</td>
                <td className="bg-green-100 p-2">Evergreen Medical Associates</td>
                <td className="bg-red-100 p-2">12345678</td>
                <td className="bg-green-100 p-2">e.martinez@evergreenmedical.org</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-2 border">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </td>
                <td className="bg-green-100 p-2">Elena R. Martinez</td>
                <td className="bg-green-100 p-2">Evergreen Medical Associates</td>
                <td className="bg-red-100 p-2">13579246</td>
                <td className="bg-green-100 p-2">e.martinez@evergreenmedical.org</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
