"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid={false} rounded>
      <Navbar.Brand as={Link} href="#">
        <Image
          className="mr-3 h-6 sm:h-9 w-auto"
          src="/images/logo.png"
          alt="PatternX logo"
          width={36}
          height={36}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PatternX
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          Consulting
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
