import { ToggleTheme } from "./ToggleTheme";

import { X, Github } from "iconoir-react";
import Link from "next/link";
import { HelpCircle, MenuIcon } from "lucide-react";
import { HelpModal } from "./HelpModal";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
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

function NavItems() {
  return (
    <>
      <div className="hidden md:flex space-x-5">
        <ToggleTheme />

        <HelpModal />
        <a
          className="flex items-center"
          href="https://github.com/akshatbajetha/compo-gen"
          target="_blank"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          className="flex items-center"
          href="https://x.com/akshatbajetha/"
          target="_blank"
        >
          <X className="w-6 h-6" />
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-4 max-w-[100px]">
              <UserIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="start" sideOffset={10}>
            <SignedIn>
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
    </>
  );
}
export default NavItems;
