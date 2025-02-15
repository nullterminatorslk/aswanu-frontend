"use client";

import logo from "@/assets/images/logo.png";
import { useToggle } from "@/hooks/useToggle";
import Image from "next/image";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";

const MobileNavbar = ({
  links = [],
}: {
  links: { link: string; text: string }[];
}) => {
  const [showMenu, toggleShowMenu] = useToggle();
  return (
    <div className="self-center place-self-end">
      <Button
        onClick={toggleShowMenu}
        variant={"link"}
        size={"icon"}
        className="text-black"
      >
        <GiHamburgerMenu />
      </Button>

      {showMenu && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col justify-between h-full">
            <div className="border-b">
              <div className="flex justify-between items-center px-5 py-4">
                <Image
                  src={logo}
                  alt="Aswanna Logo"
                  className="flex-shrink-0"
                  width={170}
                  height={48}
                />

                <Button onClick={toggleShowMenu} variant={"link"} size={"icon"}>
                  <CgClose />
                </Button>
              </div>
            </div>
            <ul
              className="grid gap-10 place-items-center text-lg"
              onClick={toggleShowMenu}
            >
              {links.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-primary transition-all font-semibold"
                >
                  <Link href={link.link}>{link.text}</Link>
                </li>
              ))}
            </ul>

            <div className="mb-4 grid px-5 gap-2" onClick={toggleShowMenu}>
              <Button size="lg" variant="outline" tabIndex={2}>
                Login
              </Button>
              <Button size="lg">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
