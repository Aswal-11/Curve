"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50">
      <div className=" flex justify-between items-center p-2">

        {/* Logo */}
        <Link href="/" className="text-xl text-red-600 font-semibold">
          <div className="relative w-[120px] h-[40px] sm:w-[140px] sm:h-[45px] md:w-[160px] md:h-[50px] lg:w-[180px] lg:h-[55px]">
            <Image
              src="/company_logo.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="max-lg:hidden lg:flex items-center space-x-8 text-base font-medium text-white">

          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 focus:outline-none">
                Company
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>About Us</DropdownMenuItem>
              <DropdownMenuItem>Vision</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/team" className="hover:text-primary transition-colors">
            Team
          </Link>

          <Link href="/case_studies" className="hover:text-primary transition-colors">
            Case Studies
          </Link>

          <Link href="/services" className="hover:text-primary transition-colors">
            Services
          </Link>

          <Link href="/blogs" className="hover:text-primary transition-colors">
            Blogs
          </Link>

          <Link href="/career" className="hover:text-primary transition-colors">
            Career
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <div className="relative w-[30px] h-[18px]">
                <Image src="/menu.svg" alt="Logo" fill className="object-contain" />
              </div>
            </SheetTrigger>

            <SheetContent side="right" className="w-[250px] sm:w-[300px]">

              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile navigation menu
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col space-y-6 mt-8">
                <Link href="/" className="text-lg hover:text-primary">Home</Link>
                <Link href="/company" className="text-lg hover:text-primary">Company</Link>
                <Link href="/team" className="text-lg hover:text-primary">Team</Link>
                <Link href="/case_studies" className="text-lg hover:text-primary">Case Studies</Link>
                <Link href="/services" className="text-lg hover:text-primary">Services</Link>
                <Link href="/blogs" className="text-lg hover:text-primary">Blogs</Link>
                <Link href="/career" className="text-lg hover:text-primary">Career</Link>
              </div>

            </SheetContent>
          </Sheet>
        </div>

        {/* CTA Button */}
        <div className=" animate-rotate-border max-w-sm rounded-full bg-conic/[from_var(--border-angle)] from-black via-black to-white p-px  max-lg:hidden">
          <div className=" flex group items-center gap-1 rounded-3xl bg-[#2331F3] p-1  ">
            <Button className="bg-transparent hover:bg-transparent p-1 text-white text-base">
              Let's Talk
            </Button>

            <div className=" relative w-[30px] h-[30px] bg-white rounded-full  rotate-45 group-hover:rotate-0 transition-all delay-150 duration-1000 flex items-center ">
              <Image src="/arrow.svg" alt="Arrow" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
