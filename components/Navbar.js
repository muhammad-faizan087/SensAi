import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { currUser } from "@/lib/getCurrUser";

const Navbar = async () => {
  await currUser();

  return (
    <header className="min-w-screen h-[10vh] fixed top-0 z-50 border-b backdrop-blur-md bg-background/50">
      <nav className="flex items-center justify-between px-4 md:px-8 w-full h-full">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="SensAi Logo"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>
        <ul>
          <SignedIn>
            <li className="flex items-center gap-2 md:gap-4">
              <Link href={"/dashboard"}>
                <Button
                  className="flex items-center gap-2 justify-between cursor-pointer"
                  variant={"outline"}
                >
                  <LayoutDashboard />
                  <span className="hidden md:block">Industry Insights</span>
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2 justify-between cursor-pointer">
                    <StarsIcon />
                    <span className="hidden md:block">Growth Skills</span>
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href={"/resume"}>
                      <Button
                        className="flex items-center gap-2 justify-between cursor-pointer"
                        variant={"ghost"}
                      >
                        <FileText />
                        <span className="">Build Resume</span>
                      </Button>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/Ai-cover-letter"}>
                      <Button
                        className="flex items-center gap-2 justify-between cursor-pointer"
                        variant={"ghost"}
                      >
                        <PenBox />
                        <span className="">Cover Letter</span>
                      </Button>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/interview"}>
                      <Button
                        className="flex items-center gap-2 justify-between cursor-pointer"
                        variant={"ghost"}
                      >
                        <GraduationCap />
                        <span className="">Interview Prep</span>
                      </Button>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <UserButton
                className="cursor-pointer"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "h-14 w-14", // enlarges avatar
                    userButtonPopoverCard: "shadow-xl", // correct key
                    userPreviewMainIdentifier: "font-semibold", // bold main identifier
                  },
                }}
              />
            </li>
          </SignedIn>
          <SignedOut>
            <Button className="cursor-pointer">
              <Link href={"/sign-in"}>Sign In</Link>
            </Button>
          </SignedOut>
        </ul>
      </nav>
      {/* <SignedOut>
        <SignInButton className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer" />
        <SignUpButton>
          <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
    </header>
  );
};

export default Navbar;
