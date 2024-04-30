"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton = (
  { label, href }: BackButtonProps = { label: "", href: "" }
) => {
  return (
    <Button variant="link" size="sm" className=" w-full" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
