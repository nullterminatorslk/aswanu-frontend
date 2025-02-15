"use client";

import logo from "@/assets/images/logo.png";
import { DesktopView, MobileView } from "@/hooks/useMobile";
import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { Button } from "./ui/button";
import { useCurrentFocusedSection } from "@/providers/CurrentFocusedSectionProvider";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", text: "Home", link: "/" },
  { id: "about", text: "About Us", link: "/#about" },
  { id: "market", text: "Our Market", link: "/market" },
  { id: "faq", text: "FAQ", link: "#faq" },
  { id: "contact", text: "Contact Us", link: "/#contact" },
];

const Navbar = () => {
  const { currentSection } = useCurrentFocusedSection();

  return (
    <div className="sticky top-0 z-40 pb-8">
      <div className="bg-white">
        <nav className="max-w-screen-xl mx-auto px-5 py-4 grid grid-cols-2 desktop:grid-cols-[auto_1fr_auto] gap-5">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Laundry Land Logo"
              className="flex-shrink-0"
              width={170}
              height={48}
            />
          </Link>

          <MobileView>
            <MobileNavbar links={links} />
          </MobileView>

          <DesktopView>
            <div className="place-self-end flex gap-3">
              <Link href="/login">
                <Button size="lg" variant="ghost" tabIndex={2}>
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg">Sign Up</Button>
              </Link>
            </div>
            <ul className="flex justify-evenly w-full max-w-screen-md mx-auto items-center tablet:col-span-full desktop:col-[2/3] desktop:row-[1/1] gap-2">
              {links.map((link) => {
                const isFocused = currentSection === link.id;

                return (
                  <li
                    key={link.text}
                    className={cn(
                      "text-center hover:text-primary font-semibold flex flex-col items-center relative",
                      isFocused && "text-primary"
                    )}
                  >
                    <Link href={link.link} tabIndex={1}>
                      {link.text}
                    </Link>
                    <div
                      className={cn(
                        "size-2 mt-1 bg-primary absolute top-full rounded-full opacity-0 transition-opacity",
                        isFocused && "opacity-100"
                      )}
                    ></div>
                  </li>
                );
              })}
            </ul>
          </DesktopView>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
