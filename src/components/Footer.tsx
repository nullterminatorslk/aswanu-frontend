import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const links = [
  { text: "Home", link: "#" },
  { text: "About Us", link: "#about" },
  { text: "Our Services", link: "#services" },
  { text: "FAQ", link: "#faq" },
  { text: "Contact Us", link: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="border-t px-5">
        <nav aria-label="Footer Navigation" className="my-6">
          <ul className="flex flex-col tablet:flex-row justify-center w-full max-w-screen-md mx-auto items-center tablet:gap-10 gap-5">
            {links.map((link) => (
              <li
                key={link.text}
                className="text-center hover:text-primary font-medium"
              >
                <Link href={link.link} tabIndex={1}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid desktop:grid-cols-3 place-items-center gap-5 desktop:grid-flow-col tablet:mt-10">
          <div className="flex flex-col tablet:flex-row items-center gap-5 desktop:gap-10 desktop:col-start-3 text-center font-medium">
            <div>
              <Link className="hover:text-primary" href={"/policy"}>
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link className="hover:text-primary" href={"/terms"}>
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="desktop:col-start-1">
            &copy; {year} Aswanna. All Rights Reserved.
          </div>
          <div className="desktop:col-start-2">
            <Image
              src={logo}
              alt="Aswanna Logo"
              className="flex-shrink-0"
              width={170}
              height={48}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
