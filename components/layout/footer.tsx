"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 lg:pb-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="#" className="flex items-center">
              <Image
                className="h-8 me-3 w-auto"
                src="/images/logo.png"
                alt="patternx logo"
                width={32}
                height={32}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                PatternX
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Home
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                About
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline ">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Contact us
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    className="hover:underline"
                    href="mailto:info@patternx.com"
                  >
                    info@patternx.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 sm:mx-auto border-gray-700 lg:my-6" />
        <div className="text-center">
          <span className="text-sm  sm:text-center text-gray-400">
            © 2024{" "}
            <Link href="#" className="hover:underline">
              PatternX
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
