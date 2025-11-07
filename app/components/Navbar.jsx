"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background sticky top-0 z-50">
      <div className="container flex justify-between items-center p-2">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          ARV Management
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu (slides from right) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col space-y-6 mt-8">
                <Link href="/" className="text-lg hover:text-primary">
                  Home
                </Link>
                <Link href="/about" className="text-lg hover:text-primary">
                  About
                </Link>
                <Link href="/services" className="text-lg hover:text-primary">
                  Services
                </Link>
                <Link href="/contact" className="text-lg hover:text-primary">
                  Contact
                </Link>
                <Button className="w-full">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Button>Get Started</Button>
      </div>
    </nav>
  );
}
