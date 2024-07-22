"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <Navbar fluid={false} rounded>
      <Navbar.Brand as={Link} href="/">
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
        <Navbar.Link as={Link} href="/" active={pathname == "/" ? true : false}>
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/consulting"
          active={pathname == "/consulting" ? true : false}
        >
          Consulting
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/about"
          active={pathname == "/about" ? true : false}
        >
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
