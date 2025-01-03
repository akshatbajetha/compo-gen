"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Code2Icon } from "lucide-react";
import NavItems from "@/components/NavItems";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/">
            <Code2Icon size={40} />
          </Link>
        </div>
        <NavItems />
      </nav>
      <Separator />
    </>
  );
};

export default Navbar;
