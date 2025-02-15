"use client";

import logo from "@/assets/images/logo.png";
import { DesktopView, MobileView } from "@/hooks/useMobile";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { Button } from "./ui/button";

const links = [
  { id: "home", text: "Home", link: "/" },
  { id: "weather", text: "Weather Forecast", link: "/weather" },
  { id: "market", text: "Our Market", link: "/market" },
  { id: "forum", text: "Forum", link: "https://govimithuru.cyextech.com/" },
  { id: "chat", text: "Chat with AI", link: "/chat" },
];

const Navbar = () => {
  const isLogged = localStorage.getItem("loggedIn") === "true";

  return (
    <div className="sticky top-0 z-40 pb-8">
      <div className="bg-white">
        <nav className="max-w-screen-xl mx-auto px-5 py-4 grid grid-cols-2 desktop:grid-cols-[auto_1fr_auto] gap-5">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Aswanna Logo"
              className="flex-shrink-0"
              width={170}
              height={48}
            />
          </Link>

          <MobileView>
            <MobileNavbar links={links} />
          </MobileView>

          <DesktopView>
            {!isLogged ? (
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
            ) : (
              <div className="place-self-end flex gap-3">
                <Link href="/login">
                  <Button size="lg" variant="ghost" tabIndex={2}>
                    Dashboard
                  </Button>
                  <Button
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                    size="lg"
                    variant="ghost"
                    tabIndex={2}
                  >
                    Logout
                  </Button>
                </Link>
              </div>
            )}
            <ul className="flex justify-evenly w-full max-w-screen-md mx-auto items-center tablet:col-span-full desktop:col-[2/3] desktop:row-[1/1] gap-2">
              {links.map((link) => {
                return (
                  <li
                    key={link.text}
                    className={cn(
                      "text-center hover:text-primary font-semibold flex flex-col items-center relative"
                    )}
                  >
                    <Link href={link.link} tabIndex={1}>
                      {link.text}
                    </Link>
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
