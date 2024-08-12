"use client";

import Button from "@/molecules/Button";
import Logo from "@/molecules/Logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const [isTop, setIsTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isAtTop = scrollTop !== 0;

      setIsTop(isAtTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={twMerge(
        "animate fixed top-0 z-50 w-full border-b border-b-white/10 px-4 lg:px-24",
        isTop ? "py-1 backdrop-blur-sm" : "py-3",
      )}
    >
      <div className="max-width flex items-center justify-between">
        <Logo />
        <nav className="flex items-center">
          <Link href="/" className="animate nav-link">
            Why Us
          </Link>
          <Link href="/" className="animate nav-link group">
            Capabilities{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="animate size-5 group-hover:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="/" className="animate nav-link group">
            Solutions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="animate size-5 group-hover:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="/" className="animate nav-link">
            Testimonials
          </Link>
          <Link href="/" className="animate nav-link">
            FAQ
          </Link>
        </nav>
        <Button hierarchy={"primary"} size="sm">
          Let&apos;s talk
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
