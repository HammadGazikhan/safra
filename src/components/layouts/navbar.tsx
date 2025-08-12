// // src/components/layout/Navbar.tsx
// "use client";

// import { Menu } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Services", href: "/services" },
//   { label: "Teams", href: "/teams" },
//   { label: "Careers", href: "/careers" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <Link href="/">
//           <Image src="/og-image.jpeg" alt="Logo" width={60} height={40} />
//         </Link>
//         <nav className="hidden md:flex gap-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="text-gray-700 hover:text-[#20aad2fc]"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>
//         <button onClick={() => setOpen(!open)} className="md:hidden">
//           <Menu />
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden px-4 py-2 space-y-2 bg-white shadow-md">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="block text-gray-700 hover:text-[#20aad2fc]"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }
"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
};

export type Navbar1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Navbar = (props: Navbar1Props) => {
  const { logo, navLinks } = {
    ...Navbar1Defaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 991px)" });

  return (
    <section
      id="relume"
      className="z-[999]  flex w-full items-center border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%] "
    >
      <div className="size-full lg:max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} className="h-13 w-20" />
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={topLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>
        </div>
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          {navLinks.map((navLink, index) =>
            navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
              <SubMenu key={index} navLink={navLink} isMobile={isMobile} />
            ) : (
              <a
                key={index}
                href={navLink.url}
                className="block py-3 text-md text-gray-700 hover:text-[#20aad2fc] first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
              >
                {navLink.title}
              </a>
            )
          )}
          {/* <Link
            href={"/contact"}
            className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row"
          >
            <Button>book a call</Button>
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
}: {
  navLink: NavLink;
  isMobile: boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="flex w-full text-gray-700 items-center justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{navLink.title}</span>
        <motion.span
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          animate={isDropdownOpen ? "rotated" : "initial"}
          transition={{ duration: 0.3 }}
        >
          <FaAngleDown />
        </motion.span>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            variants={{
              open: {
                visibility: "visible",
                opacity: "var(--opacity-open, 100%)",
                y: 0,
              },
              close: {
                visibility: "hidden",
                opacity: "var(--opacity-close, 0)",
                y: "var(--y-close, 0%)",
              },
            }}
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            transition={{ duration: 0.2 }}
            className="bg-white rounded-md lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]"
          >
            {navLink.subMenuLinks?.map((navLink, index) => (
              <a
                key={index}
                href={navLink.url}
                className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base text-gray-700 hover:text-[#20aad2fc]"
              >
                {navLink.title}
              </a>
            ))}
          </motion.nav>
        </AnimatePresence>
      )}
    </div>
  );
};

export const Navbar1Defaults: Props = {
  logo: {
    url: "/",
    src: "/logo.jpeg",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Home", url: "/" },
    // {
    //   title: "Company",
    //   url: "#",
    //   subMenuLinks: [
    //     { title: "About Us", url: "/company/about" },

    //     { title: "Teams", url: "/company/teams" },
    //   ],
    // },
    { title: "About Us", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Careers", url: "/careers" },
    { title: "Contact", url: "/contact" },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
