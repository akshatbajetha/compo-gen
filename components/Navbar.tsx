import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Code2Icon } from "lucide-react";
import NavItems from "@/components/NavItems";

const Navbar: React.FC = () => {
  return (
    <div className="top-0 fixed w-full z-50 bg-background h-16">
      <nav className="flex items-center justify-between px-24 py-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-4">
            <Code2Icon size={40} />
            <h1 className="text-3xl font-bold">CompoGen</h1>
          </Link>
        </div>
        <NavItems />
      </nav>
      <Separator />
    </div>
  );
};

export default Navbar;
