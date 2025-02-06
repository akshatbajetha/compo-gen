import Link from "next/link";
import { Code2Icon } from "lucide-react";
import { Github, X } from "iconoir-react";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import UserIcon from "./UserIcon";
import SignoutLink from "./SignoutLink";
import { Separator } from "@/components/ui/separator";
import MobileMenuButton from "./MobileMenuButton";
import { ToggleTheme } from "./ToggleTheme";
import { HelpModal } from "./HelpModal";

const Navbar = () => {
  return (
    <div className="top-0 fixed w-full z-50 bg-background md:h-16 h-max">
      <nav className="flex items-center justify-between md:px-24 px-3 py-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center md:gap-4 gap-2">
            <Code2Icon className="md:w-8 md:h-8 w-6 h-6" />
            <h1 className="md:text-3xl text-lg font-bold">CompoGen</h1>
          </Link>
        </div>
        <div className="hidden md:flex space-x-5">
          <ToggleTheme />
          <div className="hover:shadow-white/50">
          <HelpModal />
          </div>
          <a
            className="flex items-center hover:shadow-white/50"
            href="https://github.com/akshatbajetha/compo-gen"
            target="_blank"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            className="flex items-center hover:shadow-white/50"
            href="https://x.com/akshatbajetha/"
            target="_blank"
          >
            <X className="w-6 h-6" />
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex max-w-[100px]">
                <UserIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="start" sideOffset={10}>
              <SignedIn>
                <DropdownMenuItem>
                  <Link href="/savedcodes">Saved Codes</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignoutLink />
                </DropdownMenuItem>
              </SignedIn>
              <SignedOut>
                <DropdownMenuItem>
                  <SignInButton mode="modal">
                    <button className="w-full text-left">Login</button>
                  </SignInButton>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignUpButton mode="modal">
                    <button className="w-full text-left">Register</button>
                  </SignUpButton>
                </DropdownMenuItem>
              </SignedOut>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="md:hidden flex flex-row">
          <ToggleTheme />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex max-w-[50px]">
                <UserIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-12" align="start" sideOffset={10}>
              <SignedIn>
                <DropdownMenuItem>
                  <Link href="/savedcodes">Saved Codes</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignoutLink />
                </DropdownMenuItem>
              </SignedIn>
              <SignedOut>
                <DropdownMenuItem>
                  <SignInButton mode="modal">
                    <button className="w-full text-left">Login</button>
                  </SignInButton>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SignUpButton mode="modal">
                    <button className="w-full text-left">Register</button>
                  </SignUpButton>
                </DropdownMenuItem>
              </SignedOut>
            </DropdownMenuContent>
          </DropdownMenu>
          <MobileMenuButton />
        </div>
      </nav>
      <Separator />
    </div>
  );
};

export default Navbar;
