import Link from "next/link";

// components
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="text-4xl font-semibold">
          Luke <span className="text-accent">.</span>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
