"use client";

import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Content({ children }: Props) {
  return (
    <main className="py-10 container px-4 mx-auto max-w-4xl">{children}</main>
  );
}
